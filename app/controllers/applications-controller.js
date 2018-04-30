class ApplicationsController {
    constructor(data) {
        this.data = data;
    }

    async getAllApplications() {
        let applications;

        try {
            applications = await this.data.applications.getAll();
        } catch (err) {
            console.log(err);
            throw err;
        }

        return applications;
    }

    async createApplication(data) {
        const applicationData = {
            comment: data.comment,
            job_offer_id: data.jobOfferId,
            user_id: data.userId,
            cvUrl: data.cvUrl,
            coverLetterUrl: data.coverLetterUrl,
        };

        const userUpdateData = {
            firstName: data.firstName,
            lastName: data.lastName,
        };
        try {
            await this.data.applications.create(applicationData);
            await this.data.users.update(data.userId, userUpdateData);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }

    async downloadCv() {}

    async downloadCoverLetter() {}
}

module.exports = ApplicationsController;
