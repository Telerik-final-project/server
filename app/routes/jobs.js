const {
    Router,
} = require('express');

const multer = require('multer');

const {
    JobsController,
    UsersController,
} = require('../controllers/index');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const usersController = new UsersController(data);
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
        .post('/upload', upload.single('file'), (req, res) => {
            app.locals.file = req.file;
            res.json({'message': 'File uploaded successfully'});
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

    app.use('/api/jobs', router);
};

module.exports = {
    init,
};
