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
        let ad;

        try {
            ad = await this.data.jobOffers.getById(id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return ad;
    }

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
        try {
            await this.data.jobOffers.create(data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
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
