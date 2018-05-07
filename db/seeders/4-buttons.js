'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Buttons',
      [
        {
          id: 1,
          name: 'Facebook',
          isHidden: 0,
          target: 'https://www.facebook.com/',
          link: 'face',
          type: 'Social Link',
          isDeleted: 0,
        },
        {
          id: 2,
          name: 'Google',
          isHidden: 0,
          target: 'https://www.facebook.com/',
          link: 'account_box',
          type: 'Social Link',
          isDeleted: 0,
        },
        {
          id: 3,
          name: 'Wikipedia',
          isHidden: 0,
          target: 'https://www.wikipedia.org/',
          link: 'language',
          type: 'Action Link',
          isDeleted: 0,
        },
        {
          id: 4,
          name: 'Maps',
          isHidden: 0,
          target: 'https://www.google.bg/maps',
          link: 'room',
          type: 'Action Link',
          isDeleted: 0,
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
    return queryInterface.bulkDelete('Buttons', null, {});
  },
};
