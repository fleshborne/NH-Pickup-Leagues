/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
// eslint-disable-next-line linebreak-style
const { uuid } = require('uuidv4');

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    id: {
      id: uuid(),
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    freezeTableName: true,
  });

  return Location;
};
