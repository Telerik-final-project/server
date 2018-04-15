class UsersController {
    constructor(data) {
        this.data = data;
    }

    async getAllUsersData() {
        let users = [];

        try {
            users = await this.data.users.getAll();
        } catch (err) {
            console.log(err);
        }

        const apps = users.map(async (user) => {
            let applications;
            try {
                applications = await this.data.
                applications.getApplicationsByUserId(user.id);
            } catch (err) {
                console.log(err);
                throw err;
            }

            user.applications = [];
            return applications;
        });

        const applications = await Promise.all([...apps]);

        users.map((user, index) => {
            user.applications.push(...applications[index]);
        });

        return users;
    }
}

module.exports = UsersController;
