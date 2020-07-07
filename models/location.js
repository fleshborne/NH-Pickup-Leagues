/* eslint-disable linebreak-style */
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    parkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //   Location.associate = (models) => {
  //     Location.belongsTo(models.Game, {
  //       foreignKey: {
  //         allowNull: false,
  //       },
  //     });
  //   };
  return Location;
};
