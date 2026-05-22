const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'UserAccessory',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      equipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      tableName: 'user_accessories',
      underscored: true,
      indexes: [
        { fields: ['user_id'] },
        { fields: ['accessory_id'] },
        { unique: true, fields: ['user_id', 'accessory_id'] }
      ]
    }
  );
};