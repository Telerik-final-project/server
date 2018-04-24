const {
    Router,
} = require('express');

const cors = require('cors');
const AuthController = require('../controllers/auth-controller');

const router = new Router();

const init = (app) => {
    const authController = new AuthController();

    router
        .post('/register', cors(), authController.register())
        .post('/login', cors(), authController.login());

    console.log('AUTH HERE', app);
    app.use('/api', router);
};

module.exports = {
    init,
};
