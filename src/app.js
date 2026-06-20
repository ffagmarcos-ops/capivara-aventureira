const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const env = require('./config/env');
const { errorHandler } = require('./middleware/error-handler');

const healthRoutes = require('./routes/health');
const authRoutes = require('./routes/auth');
const meRoutes = require('./routes/me');
const animalsRoutes = require('./routes/animals');
const accessoriesRoutes = require('./routes/accessories');
const adminRoutes = require('./routes/admin');

const app = express();

const cspDirectives = {
  "default-src": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "frame-ancestors": ["'self'"],
  "script-src": ["'self'", 'https://cdn.tailwindcss.com'],
  "script-src-attr": ["'unsafe-inline'"],
  "style-src": ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  "img-src": ["'self'", 'data:'],
  "font-src": ["'self'", 'data:', 'https://fonts.gstatic.com'],
  "connect-src": ["'self'"],
  "manifest-src": ["'self'"],
  "form-action": ["'self'"]
};

app.set('trust proxy', 1);

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: cspDirectives
    },
    crossOriginResourcePolicy: false
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(morgan('combined'));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin || 
        env.corsOrigins.includes('*') || 
        env.corsOrigins.includes(origin) || 
        origin.includes('localhost') || 
        origin.includes('127.0.0.1')
      ) {
        return callback(null, true);
      }
      return callback(new Error('CORS not allowed'));
    },
    credentials: true
  })
);

app.use('/api', apiLimiter);
app.use('/api', healthRoutes);
app.use('/api', authRoutes);
app.use('/api', meRoutes);
app.use('/api', animalsRoutes);
app.use('/api', accessoriesRoutes);
app.use('/api', adminRoutes);

const rootDir = path.resolve(process.cwd());
app.use(express.static(rootDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

app.use(errorHandler);

module.exports = app;