const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/login', (req, res) => {
            res.status(200);
        })
        .post('/login', (req, res) => {
            res.status(200);
        })
        .get('/register', (req, res) => {
            res.status(200);
        })
        .post('/register', (req, res) => {
            res.status(200);
        })
        .get('/logout', (req, res) => {
            req.logout();
            res.status(200);
        });

    app.use('/', router);
};

module.exports = {
    init,
};
