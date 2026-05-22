const { Sequelize } = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.db.name, env.db.user, env.db.password, {
  host: env.db.host,
  port: env.db.port,
  dialect: 'mysql',
  logging: env.db.logging ? console.log : false,
  dialectOptions: {
    connectTimeout: 20000
  },
  pool: {
    max: 15,
    min: 2,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;