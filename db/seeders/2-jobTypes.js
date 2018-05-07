'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'JobTypes',
      [
        { id: 1, jobType: 'IT' },
        { id: 2, jobType: 'Marketing' },
        { id: 3, jobType: 'Sales' },
        { id: 4, jobType: 'Management' },
        { id: 5, jobType: 'Operations' },
      ].map((el) => {
        el.updatedAt = new Date();
        el.createdAt = new Date();
        return el;
      }),
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JobTypes', null, {});
  },
};
