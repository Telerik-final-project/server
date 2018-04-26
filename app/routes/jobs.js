const {
    Router,
} = require('express');
const path = require('path');

const multer = require('multer');

const {
    JobsController,
    UsersController,
    ApplicationsController,
} = require('../controllers/index');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const usersController = new UsersController(data);
    const applicationController = new ApplicationsController(data);

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads');
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
        },
    });

    const upload = multer({ storage });

    const router = new Router();
    router
        .get('/', async (req, res) => {
            const jobs = await jobsController.getAllJobAds();

            res.send(jobs);
        })
        .get('/:id', async (req, res) => {
            const id = +req.params.id;
            const job = await jobsController.getJobAdById(id);

            res.send(job);
        })
        .get('/applications/:id', async (req, res) => { // applicants per id
            const jobID = +req.params.id;
            const applicants =
                await usersController.getUsersPerJobOffer(jobID);

            const context = { applicants };

            res.send(context);
        })
        .post('/upload-cv', upload.single('file'), (req, res) => {
            console.log(req.file);
            app.locals.fileCv = req.file;
            res.json({
                'message': 'File uploaded successfully',
                fileUrl: path.join(__dirname, '..', '..', 'uploads', req.file.filename),
                type: 'cv' }
            );
        })
        .post('/upload-cover', upload.single('file'), (req, res) => {
            app.locals.fileCover = req.file;
            res.json({
                'message': 'File uploaded successfully',
                fileUrl: path.join(__dirname, '..', '..', 'uploads', req.file.filename),
                type: 'cover' }
            );
        })
        .post('/applications/create', async (req, res) => {
            console.log('-'.repeat(10))
            console.log(req.body);

            return res.json({msg: 'OKI'})
            // const application = await applicationController.createApplication(req.body);
        })
        .post('/create', async (req, res) => {
            const newJobOffer = req.body;
            console.log(app.locals.file);
            try {
                await jobsController.createJobAd(newJobOffer);
                app.locals.file = null;
                res.status(200);
            } catch (err) {
                res.send({ errMsg: err.message });
            }
        })
        .get('/edit', async (req, res) => {
            const id = 1; // will be changed
            const offerInfoToDisplay =
                await jobsController.getJobAdById(+id);

            const context = { offerInfoToDisplay };

            res.send(context);
        })
        .post('/edit', async (req, res) => {
            try {
                const jobOfferParams = req.body;
                const info = [...jobOfferParams];
                await jobsController.updateJobAd(info);

                res.status(200);
            } catch (err) {
                res.send({ errMsg: err.message });
            }
        })
        .delete('/delete', async (req, res) => {
            const id = 1; // will be changed
            try {
                await jobsController.deleteJobAd();
                res.status(200);
            } catch (err) {
                res.send({ errMsg: err.message });
            }
        });

    console.log('JOBS HERE', router);
    app.use('/api/jobs', router);
};

module.exports = {
    init,
};
