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

    async getUserById(id) {
        let user;

        try {
            user = await this.data.users.getById(+id);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return user;
    }

    async getUserByEmail(email) {
        let user;

        try {
            user = await this.data.users.getUserByEmail(email);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return user;
    }

    async ifUserExists(email) {
        let user;

        try {
            user = await this.data.users.checkUserExistence(email);
            if (user[0]) {
                return true;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }

        return false;
    }

    async createUser(data) {
        try {
            await this.data.users.create(data);
        } catch (err) {
            console.log(err);
            throw err;
        }

        return true;
    }
}

module.exports = UsersController;
