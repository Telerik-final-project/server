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

    async downloadCv() {}

    async downloadCoverLetter() {}
}

const data = require('../data');
const ac = new ApplicationsController(data);
ac.getAllApplications().then((res) => console.log(res));

module.exports = ApplicationsController;
