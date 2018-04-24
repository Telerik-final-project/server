const express = require('express');

const config = require('./config');
const customExpress = require('./config/express');
const routers = require('./routes/index');
const data = require('./data/index');
const cors = require('cors');

const app = express();

app.use(cors());

customExpress.init(app);
routers.init(app, data);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.listen(config.port);
