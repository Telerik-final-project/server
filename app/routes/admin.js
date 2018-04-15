const {
    Router,
} = require('express');

const {
    JobsController,
    ApplicationsController,
    ButtonsController,
    ContactsController,
    UsersController,
} = require('../controllers/index');

const passport = require('passport');
const validator = require('express-validator');

const init = (app, data) => {
    const jobsController = new JobsController(data);
    const applicationsController = new ApplicationsController(data);
    const buttonsController = new ButtonsController(data);
    const contactsController = new ContactsController(data);
    const usersController = new UsersController(data);

    const router = new Router();
    router
        .get('/users', async (req, res) => {
            const users = await usersController.getAllUsersData();
            const context = { users };

            res.send(context);
        })
        .get('/contacts', async (req, res) => {
            const contacts = await contactsController.getAllContacts();
            const context = { contacts };

            res.send(context);
        })
        .post('/contacts/create', async (req, res) => {
            const newContact = req.body;
            contactsController.createContacts(newContact);

            res.status(200);
        })
        .get('/contacts/edit', async (req, res) => {
            const id = 1; // will be changed
            const contactInfoToDisplay = await contactsController.getContactInfoById();
            const context = { contactInfoToDisplay };

            res.send(context);
        })
        .post('/contacts/edit', (req, res) => {
            res.status(200);
        })
        .delete('/contacts/delete', (req, res) => {
            res.status(200);
        })
        .get('/buttons', async (req, res) => {
            const buttons = await buttonsController.getAllButtons();
            const context = { buttons };

            res.send(context);
        })

        .post('/buttons/create', (req, res) => {
            res.status(200);
        })
        .get('/buttons/edit', (req, res) => {
            const context = {};

            res.send(context);
        })
        .post('/buttons/edit', (req, res) => {
            res.status(200);
        })
        .delete('/buttons/delete', (req, res) => {
            res.status(200);
        });

    console.log('ADMIN HERE', router);
    app.use('/admin', router);
};

module.exports = {
    init,
};
