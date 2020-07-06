/* eslint-disable linebreak-style */
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
        // eslint-disable-next-line linebreak-style
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    minPlayer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxPlayer: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
