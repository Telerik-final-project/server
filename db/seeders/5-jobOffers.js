'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'JobOffers',
      [
        {
          id: 1,
          title: 'Chief manager',
          status: 'open',
          type_id: 4,
          descriptionUrl: '1525693148295.txt',
        },
        {
          id: 2,
          title: 'Intern Operator',
          status: 'open',
          type_id: 5,
          descriptionUrl: '1525693148300.txt',
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
    return queryInterface.bulkDelete('JobOffers', null, {});
  },
};
