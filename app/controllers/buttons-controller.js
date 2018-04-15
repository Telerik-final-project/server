class ButtonsController {
    constructor(data) {
        this.data = data;
    }

    async getAllButtons() {
        let buttons;

        try {
            buttons = await this.data.buttons.getAll();
        } catch (err) {
            console.log(err);
            throw err;
        }

        return buttons;
    }

    async createButton(data) {
        try {
            await this.data.buttons.create(data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async updateButton(id, data) {
        try {
            await this.data.buttons.update(id, data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async deleteButton(id) {
        try {
            await this.data.buttons.delete(id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }
}

module.exports = ButtonsController;
