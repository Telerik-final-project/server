const Data = require('./data-generic.js');

const {
    Applications,
    Users,
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

    getApplicationsByJobId(jobId) {
        return this.Model.findAll({
            where: {
                job_offer_id: jobId,
                isDeleted: 0,
            },
            include: [Users],
        });
    }
}

module.exports = ApplicationsData;
