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

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(express.json({ limit: '2mb' }));
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
      if (!origin || env.corsOrigins.includes('*') || env.corsOrigins.includes(origin)) {
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

const rootDir = path.resolve(process.cwd());
app.use(express.static(rootDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

app.use(errorHandler);

module.exports = app;