const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');
const jwt = require('jwt-simple');
const moment = require('moment');

const UsersController = require('../controllers/users-controller');
const config = require('./../config/index');
const data = require('../data/index');

const usersController = new UsersController(data);

class AuthController {
    constructor() {
    }

    get isAuth() {

    }

    login() {
        return async (req, res) => {
            // const id = req.body.id;
            // const user = await usersController.getUserById(id);

            const id = +req.body.id;
            const user = await usersController.getUserByEmail(req.body.email);
            // console.log(user);
            try {
                if (user) {
                    bcrypt.compare(req.body.password, user.password,
                        (err, response) => {
                            if (!response) {
                                return res.status(402).send({ err: 'Invalid password' });
                            }
                            if (response) {
                                const expire = moment(new Date())
                                    .add(config.JWT_EXPIRE_TIME, 'seconds')
                                    .unix();
                                const payload = {
                                    sub: user.id,
                                    email: user.email,
                                    exp: expire,
                                    role: user.Role.name,
                                    iss: config.JWT_ISS,
                                };

                                const secret = config.JWT_SECRET;

                                const token = jwt.encode(payload, secret);

                                res.status(200).send({
                                    token: token,
                                });
                            }
                        });
                } else {
                    return res.status(401).send({
                        err: 'Invalid credentials.',
                    });
                }
            } catch (err) {
                res.status(500).send({
                    msg: 'The server encountered an unexpected condition!',
                });
            }
        };
    }

    register() {
        return async (req, res) => {
            const username = req.body.username;
            const user = await usersController.ifUserExists(username);

            // console.log(req.body);
            // res.send({ message: 'Done it!' });

            if (!user) {
                const newUser = {
                    id: uuid(),
                    username: req.body.username,
                    email: req.body.email,
                    role_id: 2,
                };

                try {
                    bcrypt.hash(req.body.password, null, null, async (err, hash) => {
                        if (err) {
                            res.status(500).send({
                                msg:
                                    'The server encountered an unexpected condition!',
                            });
                        } else {
                            console.log(hash);
                            newUser.password = hash;
                            try {
                                const userRes = await usersController.createUser(newUser);
                                console.log(userRes);
                                res.status(200).send({
                                    msg: 'User created!',
                                });
                            } catch (error) {
                                res.status(500).send({
                                    msd: error.message,
                                });
                                // console.log(error);
                            }
                        }
                    });
                } catch (err) {
                    res.status(500).send({
                        msg: 'The server encountered an unexpected condition!',
                    });
                }
            } else {
                res.status(401).send({
                    msg: 'User already exist',
                });
            }
        };
    }

    get logout() {

    }
}

module.exports = AuthController;
