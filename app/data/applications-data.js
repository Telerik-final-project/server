const Data = require('./data-generic.js');

const {
    Applications,
    Users,
} = require('../../db/models');

class ApplicationsData extends Data {
    constructor() {
        super(Applications);
    }

    async getApplicationsByUserId(userId) {
        const apps = await this.Model.findAll({
            where: {
                user_id: userId,
                isDeleted: 0,
            },
        });

        return apps.length;
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

    getApplicationsByUserAndJob(userId, jobId) {
        return this.Model.findAll({
            where: {
                job_offer_id: jobId,
                user_id: userId,
                isDeleted: 0,
            },
        });
    }
}

module.exports = ApplicationsData;
