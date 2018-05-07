class ButtonsController {
    constructor(data) {
        this.data = data;
    }

    async getAllButtons() {
        let buttons;

        try {
            buttons = await this.data.buttons.getAll();
        } catch (err) {
            throw err;
        }

        return buttons;
    }

    async getButtonById(id) {
        let button;

        try {
            button = await this.data.buttons.getById(id);
        } catch (err) {
            throw err;
        }

        return button;
    }

    async createButton(data) {
        try {
            await this.data.buttons.create(data);
        } catch (err) {
            throw err;
        }

        return true;
    }

   /**
     * @description Get a row from table by given id.
     * @param id number
     * @param data array form objects with arttribute
     * and value to update
     * @return Returns db object with id = id parameter.
    */

    async updateButton(id, data) {
        try {
            await this.data.buttons.update(id, data);
        } catch (err) {
            throw err;
        }

        return true;
    }

    async deleteButton(id) {
        try {
            await this.data.buttons.delete(id);
        } catch (err) {
            throw err;
        }

        return true;
    }
}

module.exports = ButtonsController;
