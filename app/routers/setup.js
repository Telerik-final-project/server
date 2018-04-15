/* globals __dirname __filename */

const fs = require('fs');
const path = require('path');

const init = (app, data) => {
    // Dynamically load all routes
    fs.readdirSync(__dirname)
        .filter((filename) => filename !== path.basename(__filename))
        .filter((filename) => filename !== 'index.js')
        // relative -> absolute path
        .map((filename) => path.join(__dirname, filename))
        .forEach((modulePath) => {
            const route = require(modulePath);
            route.init(app, data);
        });
};

module.exports = {
    init,
};
