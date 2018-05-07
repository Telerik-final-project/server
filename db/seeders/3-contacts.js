'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Contacts',
      [
        {
          id: 1,
          name: 'Main Office',
          address: 'Studentski grad, Sofia',
          status: 1,
          isDeleted: 0,
          latitude: '42.6541867',
          longtitude: '23.351427100000024',
        },
        {
          id: 2,
          name: 'Other Office',
          address: 'Mladost 1A, Sofia',
          status: 1,
          isDeleted: 0,
          latitude: '42.6405258',
          longtitude: '23.373032100000046',
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
    return queryInterface.bulkDelete('Contacts', null, {});
  },
};
