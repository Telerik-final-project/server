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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 10,
            },
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    });

    JobOffers.associate = (models) => {
        const {
            JobTypes,
        } = models;

        JobOffers.belongsTo(JobTypes, {
            foreignKey: 'type_id',
            onDelete: 'CASCADE',
        });
    };

    return JobOffers;
};
