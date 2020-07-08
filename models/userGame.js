/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */

module.exports = (sequelize, DataTypes) => {
    const UserSchedule = sequelize.define('UserGame', {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gameType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    UserSchedule.associate = (models) => {
        UserSchedule.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    UserSchedule.associate = (models) => {
        UserSchedule.hasMany(models.Game, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return UserSchedule;
};