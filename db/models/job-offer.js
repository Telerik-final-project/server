'use strict';

module.exports = (sequelize, DataTypes) => {
    const JobOffers = sequelize.define('JobOffers', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 4,
                max: 256,
            },
        },
        descriptionUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 20,
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 10,
            },
        },
        
    }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci',
        });

    JobOffers.associate = (models) => {
        const { } = models;
    };

    return JobOffers;
};
