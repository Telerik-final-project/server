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
        try {
            await this.data.applications.create(data);
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
