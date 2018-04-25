const Data = require('./data-generic.js');

const {
    Users,
    Applications,
} = require('../../db/models');

class UsersData extends Data {
    constructor() {
        super(Users);
    }

    async checkUserExistence(email) {
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

    async getUserByEmail(email) {
        let user;

        try {
            user = await this.Model.findOne({
                where: {
                    email,
                },
            });
        } catch (err) {
            console.log(err);
        }

        return user;
    }

    async getUsersPerJobOffer(jobID) {
        const jobs = await Applications.findAll({
            where: {
                job_offer_id: jobID,
            },
        });

        const applicantsIDs = jobs.map((job) => job.dataValues.user_id);

        const applicants = await Promise.all(
            applicantsIDs.map(async (id, indx) => {
                applicants[indx] = await this.Model.findOne({
                    where: {
                        id: id,
                    },
                });
            })
        );

        return applicants;
    }
}

module.exports = UsersData;
