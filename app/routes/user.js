const {
    Router,
} = require('express');

const passport = require('passport');
const validator = require('express-validator');

const {
    ContactsController,
    JobsController,
} = require('../controllers/index');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const contactsController = new ContactsController(data);

    const router = new Router();
    router.
        get('/careers', async (req, res) => {
            const jobs = await jobsController.getAllJobAds();
            const context = { jobs };

            res.send(context);
        })
        .get('/contacts', async (req, res) => {
            const contacts = await contactsController.getAllContacts();
            const context = { contacts };

            res.send(context);
        });

    console.log('USER HERE', router);
    app.use('/user', router);
};

module.exports = {
    init,
};
