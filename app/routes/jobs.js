const { Router } = require('express');

const {
  JobsController,
  ApplicationsController,
  JobTypesController,
} = require('../controllers/index');

const init = (app, data) => {
  const jobsController = new JobsController(data);
  const applicationController = new ApplicationsController(data);
  const jobTypesController = new JobTypesController(data);

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
    .get('/:id/applications', async (req, res) => {
      // applicants per id
      const jobId = +req.params.id;
      const applicants = await applicationController.getAllApplicationsByJobId(
        jobId,
      );

      res.send(applicants);
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
    .post('/create', async (req, res) => {
      const newJobOffer = req.body;
      let newJob;
      try {
        newJob = await jobsController.createJobAd(newJobOffer);
        // app.locals.file = null;
        res.status(200).send(newJob);
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    })
    .get('/edit', async (req, res) => {
      const id = 1; // will be changed
      const offerInfoToDisplay = await jobsController.getJobAdById(+id);

      const context = { offerInfoToDisplay };

      res.send(context);
    })
    .post('/edit', async (req, res) => {
      try {
        const jobOffer = req.body;
        await jobsController.updateJobAd(jobOffer);

        res.status(200).send({ status: 'ok' });
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    })
    .post('/delete/:id', async (req, res) => {
      try {
        await jobsController.deleteJobAd(req.body.id);
        res.status(200).send({ status: 'ok' });
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    });

  app.use('/api/jobs', router);
};

module.exports = {
  init,
};
