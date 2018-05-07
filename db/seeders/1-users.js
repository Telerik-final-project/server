'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '3424c100-f878-44a5-ad23-0c4f48bfda74',
          username: 'user1',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user@chocolate.com',
          firstName: 'Ivan',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 'cdd7a95b-79e5-4df9-b55c-13593d60f46c',
          username: 'admin',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'admin@chocolate.com',
          firstName: 'Admin',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 1,
        },
        {
          id: '944d10e7-dabe-42da-a628-6edd1846fc13',
          username: 'user2',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user1@chocolate.com',
          firstName: 'Ivan',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 'd0756372-dd91-434d-b01f-2b21759c73d8',
          username: 'user3',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user2@chocolate.com',
          firstName: 'Alex',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
      ].map((el) => {
        el.updatedAt = new Date();
        el.createdAt = new Date();
        return el;
      }),
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
