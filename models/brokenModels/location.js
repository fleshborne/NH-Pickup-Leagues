/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

const { uuid } = require('uuidv4');

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        // eslint-disable-next-line linebreak-style
      },
    },
    id: {
      type: DataTypes.TEXT,
      id: {
        uuid,
      },
    },
    freezeTableName: true,
  });

  return Location;
};
