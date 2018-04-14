'use strict';

module.exports = (sequelize, DataTypes) => {
    const Applications = sequelize.define('Applications', {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 20,
                max: 1024,
            },
        },
        cvUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coverLetterUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    Applications.associate = (models) => {
        const { } = models;
    };

    return Applications;
};
