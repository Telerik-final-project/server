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
            console.log(newContact)
            try {
                await contactsController.createContacts(newContact);

                res.status(200).send({
                    msg: 'Contact created!',
                });
            } catch (err) {
                res.status(200).send({
                    errMsg: 'Cannot create this contact!',
                });
            }
        })
        .get('/contacts/edit/:id', async (req, res) => {
            const id = +req.params.id;
            const contactInfoToDisplay =
                await contactsController.getContactInfoById(id);

            const context = { contactInfoToDisplay };

            res.send(context).status(200);
        })
        .post('/contacts/edit/:id', async (req, res) => {
            const id = +req.params.id;
            const contactInfo = req.body;
            console.log(contactInfo);
            contactsController.updateContacts(id, contactInfo);

            res.status(200).send({
                msg: 'Contact edited!',
            });
        })
        .post('/contacts/delete/:id', async (req, res) => {
            const id = +req.params.id;
            try {
                contactsController.deleteContacts(id);

                res.status(200).send({
                    msg: 'Button deleted!',
                });
            } catch (err) {
                res.status(500).send({
                    errMsg: 'Cannot delete this button, server error occur!',
                    errType: err.message,
                });
            }
        })
        .get('/buttons', async (req, res) => {
            const buttons = await buttonsController.getAllButtons();
            const context = { buttons };

            res.send(context);
        })
        .post('/buttons/create', async (req, res) => {
            const newButton = req.body;

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

            res.status(200).send(context);
        })
        .post('/buttons/edit/:id', async (req, res) => {
            const id = +req.params.id;
            const buttonInfo = req.body;

            try {
                buttonsController.updateButton(id, buttonInfo);

                res.status(200).send({
                    msg: 'Vsichko e tochno!',
                });
            } catch (err) {
                res.status(500).send({
                    errMsg: 'Server error!',
                });
            }
        })
        .post('/buttons/delete/:id', async (req, res) => {
            const id = +req.params.id;
            try {
                buttonsController.deleteButton(id);

                res.status(200).send({
                    msg: 'Button deleted!',
                });
            } catch (err) {
                res.status(500).send({
                    errMsg: 'Cannot delete this button, server error occur!',
                    errType: err.message,
                });
            }
        });

    app.use('/api/admin', router);
};

module.exports = {
    init,
};


