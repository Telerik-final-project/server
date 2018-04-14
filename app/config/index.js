const secret = '';
/* eslint-disable */
const port = process.env.PORT || 3006;

const dbConnectionString = process.env.NODE_ENV = 'development';
    // ? 'cloud path'
    // : 'local path';
/* eslint-enable */

module.exports = {
    port,
    secret,
    dbConnectionString,
};
