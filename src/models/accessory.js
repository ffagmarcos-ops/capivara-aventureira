const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'Accessory',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      code: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
      },
      label: {
        type: DataTypes.STRING(160),
        allowNull: false
      },
      emoji: {
        type: DataTypes.STRING(16),
        allowNull: false
      },
      slot: {
        type: DataTypes.ENUM('head', 'eyes', 'body', 'hand', 'feet'),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    },
    {
      tableName: 'accessories',
      underscored: true
    }
  );
};