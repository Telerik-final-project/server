const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const routers = require('./routes/index');
const config = require('./config');

const customExpress = require('./config/express');
const strategy = require('./config/auth');

const UsersController = require('./controllers/users-controller');
const data = require('./data/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());

customExpress.init(app);
routers.init(app, data);


(async () => {
    const usersController = new UsersController(data);
    const users = await usersController.getAllUsersData();

    console.log(users);
    passport.use(await strategy.auth(users));
})();

app.get('/test', passport.authenticate('jwt', { session: false }),
    (req, res) => res.send({ authenticated: true })
);

app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}!`);
});
