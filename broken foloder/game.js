/* eslint-disable linebreak-style */
// module.exports = (sequelize, DataTypes) => {
//   const Game = sequelize.define('Game', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1],
//         // eslint-disable-next-line linebreak-style
//       },
//     },
//     // body: {
//     //   type: DataTypes.TEXT,
//     //   allowNull: false,
//     //   len: [1],
//     // },
//     location: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1],
//     },
//     freezeTableName: true,
//     timestamps: true,
//     createdAt: true,
//     // I want updatedAt to actually be called updateTimestamp
//     updatedAt: 'updateTimestamp',
//   });
//   Game.associate = (models) => {
//     // We're saying that a Game should belong to an Author
//     // A Game can't be created without an Author due to the foreign key constraint
//     Game.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false,
//       },
//     });
//   };

//   return Game;
// };
