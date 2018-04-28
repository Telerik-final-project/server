'use strict';

module.exports = (sequelize, DataTypes) => {
    const JobTypes = sequelize.define('JobTypes', {
        jobType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 25,
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

    JobTypes.associate = (models) => {};

    return JobTypes;
};
