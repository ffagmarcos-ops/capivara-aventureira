const sequelize = require('../config/database');

const User = require('./user')(sequelize);
const AnimalEntry = require('./animal-entry')(sequelize);
const Accessory = require('./accessory')(sequelize);
const UserAccessory = require('./user-accessory')(sequelize);
const UserGameState = require('./user-game-state')(sequelize);

User.hasMany(AnimalEntry, { foreignKey: 'userId', as: 'animals' });
AnimalEntry.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.belongsToMany(Accessory, {
  through: UserAccessory,
  foreignKey: 'userId',
  otherKey: 'accessoryId',
  as: 'accessories'
});

Accessory.belongsToMany(User, {
  through: UserAccessory,
  foreignKey: 'accessoryId',
  otherKey: 'userId',
  as: 'users'
});

UserAccessory.belongsTo(User, { foreignKey: 'userId', as: 'user' });
UserAccessory.belongsTo(Accessory, { foreignKey: 'accessoryId', as: 'accessory' });

User.hasOne(UserGameState, { foreignKey: 'userId', as: 'gameState' });
UserGameState.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  User,
  AnimalEntry,
  Accessory,
  UserAccessory,
  UserGameState
};