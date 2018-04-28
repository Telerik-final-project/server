const {
    Router,
} = require('express');

const AuthController = require('../controllers/auth-controller');

const router = new Router();

const init = (app) => {
    const authController = new AuthController();

    router
        .post('/register', authController.register())
        .post('/login', authController.login());

    app.use('/api', router);
};

module.exports = {
    init,
};
