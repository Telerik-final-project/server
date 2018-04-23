const {
    Router,
} = require('express');

const AuthController = require('./../../controllers/auth.controller');

const router = new Router();

const init = () => {
    const authController = new AuthController();

    router
        .post('/api/register', authController.register)
        .post('/api/login', authController.login);

    return router;
};

module.exports = {
    init,
};
