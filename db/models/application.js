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
            allowNull: true,
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

    Applications.associate = (models) => {
        const {
            JobOffers,
            Users,
        } = models;

        Applications.belongsTo(JobOffers, {
            foreignKey: 'job_offer_id',
            onDelete: 'CASCADE',
        });

        Applications.belongsTo(Users, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });
    };

    return Applications;
};
