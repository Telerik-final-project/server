const {
    Router,
} = require('express');
const fs = require('fs');
const path = require('path');
const init = (app, data) => {
    const router = new Router();

    router.get('/', (req, res) => {
        const context = {};

        res.send(context);
    });
    app.use('/', router);
};

module.exports = {
    init,
};
