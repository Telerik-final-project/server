'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 'eee333e6-f510-4743-941b-d56e6143a568',
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
          id: 'e82a779f-0979-4ec2-bfd6-a474d7d696d8',
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
          id: 'c5117793-9b0a-46ea-96db-a112231b4359',
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
          id: 'c39cbaf2-bd82-4e94-8252-73dec20b1466',
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
          id: 'b9e72074-fc26-463c-bae6-6bc22de3047b',
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
          id: 'b55117fc-06c0-4c7d-bbfc-f7d504616a5e',
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
          id: 'b55117fc-06c0-4c7d-bbfc-f7d504616a5e',
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
          id: '463db5d4-e10e-4f31-a589-bfef0e3be8a6',
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
          id: '463db5d4-e10e-4f31-a589-bfef0e3be8a5',
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
          id: '463db5d4-e10e-4f31-a589-bfef0e3be8a5',
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
          id: '463db5d4-e10e-4f31-a589-bfef0e3be8b6',
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
          id: '463db5d4-e10e-4f31-a589-bfef0e3be8b9',
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
