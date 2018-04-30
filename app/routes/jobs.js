/* globals __dirname*/
const {
    Router,
} = require('express');
const path = require('path');

const multer = require('multer');

const {
    JobsController,
    UsersController,
    ApplicationsController,
    JobTypesController,
} = require('../controllers/index');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const usersController = new UsersController(data);
    const applicationController = new ApplicationsController(data);
    const jobTypesController = new JobTypesController(data);

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
        .get('/types', async (req, res) => {
            const jobs = await jobTypesController.getAllJobTypes();

            res.send(jobs);
        })
        .get('/:id', async (req, res) => {
            const id = +req.params.id;
            try {
                const job = await jobsController.getJobAdById(id);
                res.send(job);
            } catch (err) {
                res.status(500).send({ errMsg: 'Internal server error' });
            }
        })
        .get('/applications/:id', async (req, res) => { // applicants per id
            const jobID = +req.params.id;
            const applicants =
                await usersController.getUsersPerJobOffer(jobID);

            const context = { applicants };

            res.send(context);
        })
        .post('/upload-cv', upload.single('file'), (req, res) => {
            const fileUrl = path.join(__dirname, '..',
            '..', 'uploads', req.file.filename);
            app.locals.fileCv = req.file;
            app.locals.fileCv.fileUrl = fileUrl;
            res.json({
                'message': 'File uploaded successfully',
                fileUrl,
                type: 'cv' }
            );
        })
        .post('/upload-cover', upload.single('file'), (req, res) => {
            const fileUrl = path.join(__dirname, '..', '..',
            'uploads', req.file.filename);
            app.locals.fileCover = req.file;
            app.locals.fileCover.fileUrl = fileUrl;
            res.json({
                'message': 'File uploaded successfully',
                fileUrl,
                type: 'cover' }
            ).status(200);
        })
        .post('/applications/create', async (req, res) => {
            try {
                await applicationController.createApplication(req.body);
                res.send({ status: 'ok' }).status(200);
            } catch (err) {
                res.send({ errMsg: err.message }).status(500);
            }
        })
        .post('/create', async (req, res) => {
            const newJobOffer = req.body;
            let newJob;
            console.log(app.locals.file);
            console.log(newJobOffer);
            try {
                newJob = await jobsController.createJobAd(newJobOffer);
                // app.locals.file = null;
                res.send(newJob).status(200);
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
                const jobOffer = req.body;
                await jobsController.updateJobAd(jobOffer);

                res.send({ status: 'ok' }).status(200);
            } catch (err) {
                res.send({ errMsg: err.message });
            }
        })
        .post('/delete/:id', async (req, res) => {
            try {
                await jobsController.deleteJobAd(req.body.id);
                res.send({ status: 'ok' }).status(200);
            } catch (err) {
                res.send({ errMsg: err.message });
            }
        });

    app.use('/api/jobs', router);
};

module.exports = {
    init,
};
