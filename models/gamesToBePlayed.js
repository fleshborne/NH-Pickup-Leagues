/* eslint-disable linebreak-style */

module.exports = (sequelize, DataTypes) => {
  const GamesToBePlayed = sequelize.define('GamesToBePlayed', {
    gameType: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.TEXT,
    },
  });
  return GamesToBePlayed;
};
