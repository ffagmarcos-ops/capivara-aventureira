const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'AnimalEntry',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      animalName: {
        type: DataTypes.STRING(160),
        allowNull: false
      },
      category: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      location: {
        type: DataTypes.STRING(120),
        allowNull: true
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      photoBase64: {
        type: DataTypes.TEXT('long'),
        allowNull: true
      },
      premiumUnlocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      capturedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: 'animal_entries',
      underscored: true,
      indexes: [
        { fields: ['user_id'] },
        { fields: ['category'] },
        { fields: ['captured_at'] }
      ]
    }
  );
};