const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const init = (app, data) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/:id', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/applications/:id', (req, res) => {
            const context = {};

            res.send(context);
        })
        .get('/create', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/create', (req, res) => {
            res.status(200);
        })
        .get('/edit', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/edit', (req, res) => {
            res.status(200);
        })
        .delete('/delete', (req, res) => {
            res.status(200);
        });

        app.use('/jobs', router);
    };

module.exports = {
    init,
};
