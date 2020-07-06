/* eslint-disable linebreak-style */
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
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
  Game.associate = (models) => {
    // We're saying that a Game should belong to an Author
    // A Game can't be created without an Author due to the foreign key constraint
    Game.hasMany(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Game;
};
