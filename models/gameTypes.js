module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('gameTypes', {
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
  console.log(Schedule);
  return Schedule;
};
