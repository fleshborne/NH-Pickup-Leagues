/* eslint-disable linebreak-style */
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('GameTypes', {
    gameTypesName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    neededToPlay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  Schedule.associate = (models) => {
    Schedule.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  // console.log(Schedule);
  return Schedule;
};
