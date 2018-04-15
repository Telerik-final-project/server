const config = require('../config');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const {
    Strategy,
} = require('passport-local');

const init = (app, data) => {
    passport.use(new Strategy(async (username, password, done) => {
        const user = await data.users.getByUsername(username);

        if (!user || user.password !== password) {
            return done(null, false, {
                message: 'Incorrect username or password!',
            });
        }

        return done(null, user); // if user&&pass exists
    }));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser(async (username, done) => {
        const user = await data.users.getByUsername(username);

        if (!user) {
            return done(new Error('invalid user!'));
        }

        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: config.secret,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};
