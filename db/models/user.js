'use strict';

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                min: 5,
                max: 30,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                min: 8,
                max: 256,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                min: 5,
                max: 1024,
                isEmail: true,
            },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                min: 3,
                max: 100,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                min: 3,
                max: 100,
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

    Users.associate = (models) => {
        const {
            Roles,
        } = models;

        Users.belongsTo(Roles, {
            foreignKey: 'role_id',
            onDelete: 'CASCADE',
        });
    };

    return Users;
};
