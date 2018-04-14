const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/users', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/contacts', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/contacts/create', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/contacts/create', (req, res) => {
            res.status(200);
        })
        .get('/contacts/edit', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/contacts/edit', (req, res) => {
            res.status(200);
        })
        .delete('/contacts/delete', (req, res) => {
            res.status(200);
        })
        .get('/buttons', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/buttons/create', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/buttons/create', (req, res) => {
            res.status(200);
        })
        .get('/buttons/edit', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/buttons/edit', (req, res) => {
            res.status(200);
        })
        .delete('/buttons/delete', (req, res) => {
            res.status(200);
        });

    app.use('/admin');
};

module.exports = {
    init,
};
