class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }

    getAll() {
        return this.Model.findAll({
            where: {
                isDeleted: 0,
            },
            include: this.includes,
        });
    }

    getById(id) {
        return this.Model.findById(id, {
            include: this.includes,
        });
    }

    create(obj) {
        if (obj === null || typeof obj === 'undefined') {
            throw new Error('Invalid object');
        }
        return this.Model.create(obj);
    }

    update(id, data) {
        const tableUpdate = (key, value) => {
            this.Model.update({
                [key]: value,
            }, {
                where: {
                    id: id,
                },
            });
        };
        Object.keys(data).forEach((key) => {
            tableUpdate(key, data[key]);
        });
        // data.forEach((dataRowToUpdate) => {
        //     const attr = Object.keys(dataRowToUpdate)[0];
        //     const value = dataRowToUpdate[attr];
        //     tableUpdate(attr, value);
        // });
    }

    delete(id) {
        return this.Model.update({
            isDeleted: 1,
        }, {
            where: {
                id,
            },
        });
    }
}

module.exports = Data;
