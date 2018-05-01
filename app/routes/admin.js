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
        .get('/contacts/edit/', async (req, res) => {
            const id = 1; // will be changed
            const contactInfoToDisplay =
                await contactsController.getContactInfoById(id);

            const context = { contactInfoToDisplay };

            res.send(context);
        })
        .post('/contacts/edit/:id', async (req, res) => {
            const contactInfo = req.body;
            const info = [...contactInfo];
            await contactsController.updateContacts(info);

            res.status(200);
        })
        .post('/contacts/delete/:id', async (req, res) => {
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
            console.log(newButton);
            try {
                buttonsController.createButton(newButton);

                res.status(200).send({
                    msg: 'Button created!',
                });
            } catch (err) {
                res.status(500).send({
                    msd: err.message,
                });
            }
        })
        .get('/buttons/edit/:id', async (req, res) => {
            const id = req.params.id;
            const buttonInfoToDisplay =
                await buttonsController.getButtonById(id);

            const context = { buttonInfoToDisplay };

            res.send(context);
        })
        .post('/buttons/edit/:id', async (req, res) => {
            const id = +req.params.id;
            const buttonInfo = req.body;
            console.log(buttonInfo)
            const info = [...buttonInfo];

            try {
                await buttonsController.updateButton(id, info);

                res.status(200);
            } catch (err) {
                res.status(500).send({
                    errMsg: 'server error!',
                });
                console.log(err);
            }
        })
        .post('/buttons/delete/:id', async (req, res) => {
            const id = 1; // will be changed
            await buttonsController.deleteButton(id);

            res.status(200);
        });

    app.use('/api/admin', router);
};

module.exports = {
    init,
};
