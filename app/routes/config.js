/* globals __dirname*/
const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const init = (app, data) => {
  const router = new Router();
  router.get('/', (req, res) => {
    fs.readFile(
      path.join(__dirname, '..', '..', 'env.json'),
      'utf8',
      (err, config) => {
        res.send(config);
      },
    );
  });

  app.use('/config', router);
};

module.exports = {
  init,
};
