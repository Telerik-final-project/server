'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          username: 'user',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user@chocolate.com',
          firstName: 'Ivan',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 2,
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
          id: 3,
          username: 'user1',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user1@chocolate.com',
          firstName: 'Ivan',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 4,
          username: 'user2',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user2@chocolate.com',
          firstName: 'Alex',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 5,
          username: 'user3',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user3@chocolate.com',
          firstName: 'Milena',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 6,
          username: 'user4',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user4@chocolate.com',
          firstName: 'Valio',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 7,
          username: 'user5',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user5@chocolate.com',
          firstName: 'Rusi',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 8,
          username: 'user6',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user6@chocolate.com',
          firstName: 'Marto',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 9,
          username: 'user7',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user7@chocolate.com',
          firstName: 'Doncho',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 10,
          username: 'user8',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user8@chocolate.com',
          firstName: 'Vik',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 11,
          username: 'user9',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user9@chocolate.com',
          firstName: 'Ivan',
          lastName: 'Petkov',
          isDeleted: 0,
          role_id: 2,
        },
        {
          id: 12,
          username: 'user10',
          password:
            '$2a$10$DHsM1qQ.NR9YiepcdlckF.H7zuKWzeZ1WbOlhb2xyA/2bcSZ21ISC',
          email: 'user10@chocolate.com',
          firstName: 'Ivan',
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
