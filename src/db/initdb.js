const mysql = require('mysql2/promise');
const env = require('../config/env');
const { sequelize, Accessory } = require('../models');
const accessoriesSeed = require('../seed/accessories');

function getInitdbFlags() {
  return {
    createDatabase: process.env.INITDB_CREATE_DATABASE !== 'false',
    alterSchema: process.env.INITDB_ALTER !== 'false'
  };
}

async function ensureDatabaseExists() {
  const connection = await mysql.createConnection({
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    connectTimeout: 20000,
    multipleStatements: false
  });

  try {
    const dbName = env.db.name.replace(/`/g, '');
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
    );
    console.log(`Banco garantido: ${dbName}`);
  } finally {
    await connection.end();
  }
}

async function migrateAnimalImageColumn() {
  const queryInterface = sequelize.getQueryInterface();
  const table = 'animal_entries';

  try {
    const description = await queryInterface.describeTable(table);
    const hasOld = Object.prototype.hasOwnProperty.call(description, 'photo_url');
    const hasNew = Object.prototype.hasOwnProperty.call(description, 'photo_base64');

    if (hasOld && hasNew) {
      await sequelize.query(
        `UPDATE ${table}
         SET photo_base64 = photo_url
         WHERE photo_base64 IS NULL
           AND photo_url IS NOT NULL
           AND photo_url LIKE 'data:image/%;base64,%'`
      );
      console.log('Migracao de imagens para photo_base64 concluida');
    }
  } catch (error) {
    console.warn('Aviso ao verificar migracao de imagens:', error.message);
  }
}

async function seedAccessories() {
  await Accessory.bulkCreate(accessoriesSeed, {
    updateOnDuplicate: ['label', 'emoji', 'slot', 'price']
  });
  console.log(`Seed de acessorios sincronizado: ${accessoriesSeed.length} itens`);
}

async function initDatabase() {
  const flags = getInitdbFlags();

  if (flags.createDatabase) {
    await ensureDatabaseExists();
  }

  await sequelize.authenticate();
  await sequelize.sync({ alter: flags.alterSchema });
  await migrateAnimalImageColumn();
  await seedAccessories();

  console.log(
    `InitDB pronto (createDatabase=${flags.createDatabase}, alterSchema=${flags.alterSchema})`
  );
}

module.exports = {
  initDatabase
};