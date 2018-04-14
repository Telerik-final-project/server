'use strict';

module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Roles.associate = (models) => { };

    return Roles;
};
