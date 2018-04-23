const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../config');

let opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
    issuer: config.JWT_ISS,
    // audience: ''
};
const UsersController = require('../controllers/users-controller');
const data = require('../data/index');

console.log(data);
const usersController = new UsersController(data);

const init = (users) => {
    return new JwtStrategy(opt, (_jwtPayload, done) => {
        console.log(_jwtPayload);

        // const dbUser =  
    });
};

module.exports = {
    init,
};
