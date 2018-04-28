class JobTypesController {
    constructor(data) {
        this.data = data;
    }

    async getAllJobTypes() {
        let types;

        try {
            types = await this.data.jobTypes.getAll();
        } catch (err) {
            console.log(err);
            throw err;
        }

        return types;
    }
}

module.exports = JobTypesController;
