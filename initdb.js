const { initDatabase } = require('./src/db/initdb');

async function run() {
  console.log('Iniciando inicialização/atualização do banco de dados...');
  try {
    await initDatabase();
    console.log('Inicialização/atualização do banco de dados concluída com sucesso! 🎉');
    process.exit(0);
  } catch (error) {
    console.error('Erro crítico ao inicializar o banco de dados:', error);
    process.exit(1);
  }
}

run();
