const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../config');

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
    issuer: config.JWT_ISS,
};

const UsersController = require('../controllers/users-controller');
const data = require('../data/index');

const usersController = new UsersController(data);

const auth = (users) => {
    return new JwtStrategy(opt, async (_jwtPayload, done) => {
        console.log(_jwtPayload);

        const user = await usersController.getUserById(_jwtPayload.id);

        if (user) {
            return done(null, user);
        }

        return done('Not authenticated!', false);
    });
};

module.exports = {
    auth,
};
