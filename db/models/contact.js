'use strict';

module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 128,
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 1024,
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Contacts.associate = (models) => {
        const { } = models;
    };

    return Contacts;
};
