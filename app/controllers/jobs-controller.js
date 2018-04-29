/* globals __dirname */
const fs = require('fs');
const path = require('path');
class JobsController {
    constructor(data) {
        this.data = data;
    }

    async getAllJobAds() {
        let ads = [];

        try {
            ads = await this.data.jobOffers.getAll();
        } catch (err) {
            console.log(err);
            throw err;
        }

        return ads;
    }

    async getJobAdById(id) {
        return new Promise(async (resolve, reject) => {
            let ad;

            try {
                ad = await this.data.jobOffers.getById(id);
            } catch (err) {
                console.log(err);
                throw err;
            }

            fs.readFile(ad.descriptionUrl, 'utf8', (err, data) => {
                if (err) {
                    return reject();
                }

                ad.descriptionUrl = data;

                return resolve(ad);
            });
        });
    }

    /**
     * @description Get a row from table by given id.
     * @param id number
     * @param data array form objects with arttribute
     * and value to update
     * @return Returns db object with id = id parameter.
     */

    async updateJobAd(id, data) {
        try {
            await this.data.jobOffers.update(id, data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async createJobAd(data) {
        let newJob;
        const description = data.descriptionUrl;
        const relPath = path.join(__dirname, '..', '..',
            'uploads', 'descriptions', new Date().getTime() + '.txt');

        try {
            fs.writeFile(relPath, description, 'utf8', (err) => {
                if (err) throw err;
            });
            data.descriptionUrl = relPath;
            newJob = await this.data.jobOffers.create(data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return newJob;
    }

    async deleteJobAd(id) {
        try {
            await this.data.jobOffers.delete(id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }
}

module.exports = JobsController;
