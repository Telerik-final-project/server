class UsersController {
  constructor(data) {
    this.data = data;
  }

  async getAllUsersData() {
    let users = [];

    try {
      users = await this.data.users.getAll();
    } catch (err) {
        throw err;
    }

    const app = await Promise.all(
      users.map(async (user) => {
        let applications;
        try {
          applications = await this.data.applications.getApplicationsByUserId(
            user.id,
          );
        } catch (err) {
          throw err;
        }

        return applications;
      }),
    );


    return users.map((user, indx) => {
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        applications: app[indx],
      };
    });
  }

  async getUserById(id) {
    let user;

    try {
      user = await this.data.users.getById(id);
    } catch (err) {
      throw err;
    }

    return user;
  }

  async getUserByEmail(email) {
    let user;

    try {
      user = await this.data.users.getUserByEmail(email);
    } catch (err) {
      throw err;
    }

    return user;
  }

  async ifUserExists(username) {
    let user;

    try {
      user = await this.data.users.checkUserExistence(username);
      if (user[0]) {
        return true;
      }
    } catch (err) {
      throw err;
    }

    return false;
  }

  async createUser(data) {
    try {
      data.isDeleted = 0;
      await this.data.users.create(data);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UsersController;
