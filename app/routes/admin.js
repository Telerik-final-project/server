const {
    Router,
} = require('express');

const {
    ButtonsController,
    ContactsController,
    UsersController,
} = require('../controllers/index');

const init = (app, data) => {
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
            await contactsController.createContacts(newContact);

            res.status(200);
        })
        .get('/contacts/edit', async (req, res) => {
            const id = 1; // will be changed
            const contactInfoToDisplay =
                await contactsController.getContactInfoById(id);

            const context = { contactInfoToDisplay };

            res.send(context);
        })
        .post('/contacts/edit', async (req, res) => {
            const contactInfo = req.body;
            const info = [...contactInfo];
            await contactsController.updateContacts(info);

            res.status(200);
        })
        .delete('/contacts/delete', async (req, res) => {
            const id = 1; // will be changed
            await contactsController.deleteContacts(id);

            res.status(200);
        })
        .get('/buttons', async (req, res) => {
            const buttons = await buttonsController.getAllButtons();
            const context = { buttons };

            res.send(context);
        })
        .post('/buttons/create', async (req, res) => {
            const newButton = req.body;
            buttonsController.createButton(newButton);

            res.status(200);
        })
        .get('/buttons/edit', async (req, res) => {
            const id = 1; // will be changed
            const buttonInfoToDisplay =
                await buttonsController.getButtonById(id);

            const context = { buttonInfoToDisplay };

            res.send(context);
        })
        .post('/buttons/edit', async (req, res) => {
            const buttonInfo = req.body;
            const info = [...buttonInfo];
            await buttonsController.updateButton(info);

            res.status(200);
        })
        .delete('/buttons/delete', async (req, res) => {
            const id = 1; // will be changed
            await buttonsController.deleteButton(id);

            res.status(200);
        });

    app.use('/api/admin', router);
};

module.exports = {
    init,
};
