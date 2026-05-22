const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'UserGameState',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      guardianXP: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      seedCoins: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      currentStreak: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      lastVisitDate: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      quizDoneDate: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      userLevelMemo: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 1
      },
      activeMissions: {
        type: DataTypes.JSON,
        allowNull: true
      },
      cameraAccepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      tableName: 'user_game_states',
      underscored: true,
      indexes: [{ unique: true, fields: ['user_id'] }]
    }
  );
};