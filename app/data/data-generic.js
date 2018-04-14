class Data {
    constructor(Model, includes = []) {
        this.Model = Model;
        this.includes = includes;
    }
    getAll() {
        return this.Model.findAll();
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
}

module.exports = Data;
