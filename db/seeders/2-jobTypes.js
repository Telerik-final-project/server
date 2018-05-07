'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'JobTypes',
      [
        { id: 1, jobType: 'IT Department', isDeleted: 0 },
        { id: 2, jobType: 'Marketing', isDeleted: 0 },
        { id: 3, jobType: 'Sales', isDeleted: 0 },
        { id: 4, jobType: 'Management', isDeleted: 0 },
        { id: 5, jobType: 'Operations', isDeleted: 0 },
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
