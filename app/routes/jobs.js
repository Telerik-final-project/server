const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const {
    JobsController,
    UsersController,
} = require('../controllers/index');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const usersController = new UsersController(data);

    const router = new Router();
    router
        .get('/', async (req, res) => {
            const jobs = await jobsController.getAllJobAds();
            const context = { jobs };

            res.send(context);
        })
        .get('/:id', async (req, res) => {
            const id = +req.params.id;
            const job = await jobsController.getJobAdById(id);

            const context = { job };

            res.send(context);
        })
        .get('/applications/:id', async (req, res) => { // applicants per id
            const jobID = +req.params.id;
            const applicants =
                await usersController.getUsersPerJobOffer(jobID);

            const context = { applicants };

            res.send(context);
        })
        .post('/create', async (req, res) => {
            const newJobOffer = req.body;
            try {
                await jobsController.createJobAd(newJobOffer);
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
    app.use('/jobs', router);
};

module.exports = {
    init,
};
