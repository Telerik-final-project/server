const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const init = (app, data) => {
    const router = new Router();

    router.
        get('/careers', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/contacts', (req, res) => {
            const context = {};

            res.send(context);
        });

    app.use('/user', router);
};

module.exports = {
    init,
};
