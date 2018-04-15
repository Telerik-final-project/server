const Data = require('./data-generic.js');

const {
    Users,
} = require('../../db/models');

class UsersData extends Data {
    constructor() {
        super(Users);
    }

    async checkUserExistance(email) {
        const result = await this.Model.findOne({
            where: {
                email: email,
            },
        });

        if (result.length > 0) {
            return true;
        }

        return false;
    }
}

module.exports = UsersData;
