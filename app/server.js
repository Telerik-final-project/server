const express = require('express');

const config = require('./config');
const customExpress = require('./config/express');

const app = express();

customExpress.init(app);

// Global Vars
app.use(function(req, res, next) {
    res.locals.user = req.user || null;
    next();
});

app.listen(config.port);
