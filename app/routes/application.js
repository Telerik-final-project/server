/* globals __dirname*/
const { Router } = require('express');
const path = require('path');

const multer = require('multer');

const { ApplicationsController } = require('../controllers/index');

const init = (app, data) => {
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
      try {
        const apps = await applicationController.getAll();
        res.status(200).send(apps);
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    })
    .get('/:id', async (req, res) => {
      try {
        const apps = await applicationController.getById(req.body);
        res.status(200).send(apps);
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    })
    .get('/download/:fileName', async (req, res) => {
      const file = req.params.fileName;

      const filePath = path.join(__dirname, '..', '..', 'uploads', file);

      return res.download(filePath, file);
    })
    .post('/upload-cv', upload.single('file'), (req, res) => {
      const fileUrl = path.join(
        __dirname,
        '..',
        '..',
        'uploads',
        req.file.filename,
      );
      app.locals.fileCv = req.file;
      app.locals.fileCv.fileUrl = fileUrl;
      res.json({
        message: 'File uploaded successfully',
        fileUrl,
        type: 'cv',
      });
    })
    .post('/upload-cover', upload.single('file'), (req, res) => {
      const fileUrl = path.join(
        __dirname,
        '..',
        '..',
        'uploads',
        req.file.filename,
      );
      app.locals.fileCover = req.file;
      app.locals.fileCover.fileUrl = fileUrl;
      res
        .json({
          message: 'File uploaded successfully',
          fileUrl,
          type: 'cover',
        })
        .status(200);
    })
    .post('/create', async (req, res) => {
      try {
        await applicationController.createApplication(req.body);
        res.status(200).send({ status: 'ok' });
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    })
    .post('/check', async (req, res) => {
      try {
        const result = await applicationController
          .isUserAppliedForJob(req.body.userId, req.body.jobId);

        res.status(200).send(result);
      } catch (err) {
        res.status(500).send({ errMsg: err.message });
      }
    });
  app.use('/api/applications', router);
};

module.exports = {
  init,
};
