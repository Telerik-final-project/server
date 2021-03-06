const Data = require('./data-generic');

const {
    Users,
    Roles,
    Buttons,
    Contacts,
    JobOffers,
    JobTypes,
} = require('../../db/models');

const ApplicationsData = require('./applications-data');
const UsersData = require('./users-data');

module.exports = {
    users: new UsersData(Users),
    roles: new Data(Roles),
    buttons: new Data(Buttons),
    contacts: new Data(Contacts),
    jobOffers: new Data(JobOffers, [JobTypes]),
    applications: new ApplicationsData(),
    jobTypes: new Data(JobTypes),
};
