'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Applications',
      [
        {
          id: 1,
          comment: 'I like this job very much',
          cvUrl: 'file-1524692151237-04bitconvert.en.pdf',
          coverLetterUrl: '',
          isDeleted: 0,
          job_offer_id: 1,
          user_id: 1,
        },
        {
          id: 2,
          comment: 'I don\' like the job, but I apply',
          cvUrl: 'file-1524692342564-02secretmessage.en.pdf',
          coverLetterUrl: 'file-1524692592557-03expressions.en.pdf',
          isDeleted: 0,
          job_offer_id: 1,
          user_id: 3,
        },
        {
          id: 3,
          comment: 'Please, take me as a Chief Manager',
          cvUrl: 'file-1525087400472-8_Festyval_6-7__Pyrvi_solutions.pdf',
          coverLetterUrl: '',
          isDeleted: 0,
          job_offer_id: 1,
          user_id: 3,
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
    return queryInterface.bulkDelete('Applications', null, {});
  },
};
