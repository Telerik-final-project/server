const Data = require('./data-generic');

const {
    Users,
    Roles,
    Buttons,
    Contacts,
    JobOffers,
} = require('../../db/models');

const ApplicationsData = require('./applications-data');

module.exports = {
    users: new Data(Users),
    roles: new Data(Roles),
    buttons: new Data(Buttons),
    contacts: new Data(Contacts),
    jobOffers: new Data(JobOffers),
    applications: new ApplicationsData(),
};
