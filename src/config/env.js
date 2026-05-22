const dotenv = require('dotenv');

dotenv.config();

function getEnv(name, fallback) {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === null || value === '') {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  jwtSecret: getEnv('JWT_SECRET', 'change-me'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigins: (process.env.CORS_ORIGINS || '*').split(',').map((v) => v.trim()),
  db: {
    host: getEnv('DB_HOST', 'localhost'),
    port: Number(process.env.DB_PORT || 3306),
    name: getEnv('DB_NAME', 'capivara'),
    user: getEnv('DB_USER', 'root'),
    password: process.env.DB_PASSWORD || '',
    logging: process.env.DB_LOGGING === 'true'
  }
};