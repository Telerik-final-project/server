const {
    Router,
} = require('express');

const passport = require('passport');

const {
    UsersController,
} = require('../controllers/index');


const init = (app, data) => {
    const usersController = new UsersController(data);

    const router = new Router();

    router
        .post('/login', (req, res, next) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    return res.status(300).json(info);
                }

                return req.login(user, (error) => {
                    if (error) {
                        return res.status(300).json(info);
                    }

                    return res.status(200);
                });
            })(req, res, next);
        })
        .post('/register', async (req, res) => {
            const newUser = req.body;
            const ifUserExists =
                await usersController.ifUserExists(newUser.email);

            if (ifUserExists) {
                res.send({ errMsg: 'User already exists!' });
            }

            await usersController.createUser(newUser);

            res.status(200).send({ msg: 'You have successfully registered!' });
        })
        .post('/logout', (req, res) => {
            req.logout();
            res.status(200);
        });

    console.log('AUTH HERE', router);
    app.use('/', router);
};

module.exports = {
    init,
};
