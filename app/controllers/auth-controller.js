const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');
const jwt = require('jwt-simple');
const moment = require('moment');

const UsersController = require('../controllers/users-controller');
const config = require('./../config/index');
const data = require('../data/index');

const usersController = new UsersController(data);

class AuthController {
    constructor(users) {
        this.users = users;
    }

    get isAuth() {

    }

    get login() {
        return async (req, res) => {
            const id = +req.body.id;
            const user = await usersController.getUserById(id);

            try {
                if (user) {
                    bcrypt.compare(req.body.password, user.password,
                        (err, response) => {
                            if (response) {
                                const expire = moment(new Date())
                                    .add(config.JWT_EXPIRE_TIME, 'seconds')
                                    .unix();

                                const payload = {
                                    sub: user.id,
                                    email: user.email,
                                    password: user.password,
                                    exp: expire,
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
                        err: 'User already exist!',
                    });
                }
            } catch (err) {
                res.status(500).send({
                    msg: 'The server encountered an unexpected condition!',
                });
            }
        };
    }

    get register() {
        return async (req, res) => {
            const id = +req.body.id;
            const user = await usersController.getUserById(id);
            if (!user) {
                const newUser = {
                    id: uuid(),
                    email: req.body.email,
                    password: '',
                };

                try {
                    bcrypt.hash(req.body.password, null, null, (err, hash) => {
                        newUser.password = hash;
                    });

                    usersController.createUser(newUser);

                    res.status(200).send({
                        msg: 'User created!',
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
