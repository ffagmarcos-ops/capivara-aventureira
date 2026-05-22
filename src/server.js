const app = require('./app');
const env = require('./config/env');
const { initDatabase } = require('./db/initdb');

async function bootstrap() {
  try {
    await initDatabase();

    app.listen(env.port, () => {
      console.log(`API online na porta ${env.port}`);
    });
  } catch (error) {
    console.error('Falha ao iniciar API:', error);
    process.exit(1);
  }
}

bootstrap();