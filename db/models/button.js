'use strict';

module.exports = (sequelize, DataTypes) => {
    const Buttons = sequelize.define('Buttons', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3,
                max: 128,
            },
        },
        target: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isHidden: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    });

    Buttons.associate = (models) => {
        const {} = models;
    };
    return Buttons;
};
