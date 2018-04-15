class ContactsController {
    constructor(data) {
        this.data = data;
    }

    async getAllContacts() {
        let contacts;

        try {
            contacts = await this.data.contacts.getAll();
        } catch (err) {
            console.log(err);
            throw err;
        }

        return contacts;
    }

    async getContactsById(id) {
        let contacts;

        try {
            contacts = await this.data.contacts.getById(id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return contacts;
    }

    async getContactInfoById(id) {
        let contact;

        try {
            contact = await this.data.contacts.getById(+id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return contact;
    }

    async createContacts(data) {
        try {
            await this.data.contacts.create(data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async updateContacts(id, data) {
        try {
            await this.data.contacts.update(id, data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async deleteContacts(id) {
        try {
            await this.data.contacts.delete(id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }
}

module.exports = ContactsController;
