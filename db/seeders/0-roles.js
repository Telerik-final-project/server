'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [{ id: 1, name: 'admin' }, { id: 2, name: 'user' }].map((el) => {
        el.updatedAt = new Date();
        el.createdAt = new Date();
        return el;
      }),
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
