const Data = require('./data-generic.js');

const {
    Applications,
} = require('../../db/models');

class ApplicationsData extends Data {
    constructor() {
        super(Applications);
    }

    getApplicationsByUserId(userId) {
        return this.Model.findAll({
            where: {
                user_id: userId,
            },
        });
    }
}

module.exports = ApplicationsData;
