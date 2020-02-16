import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import morgan from 'morgan';
import dotenv from 'dotenv';

import albumRouter from './routes/albumRoutes';

const app = express();

// GLOBAL
dotenv.config({ path: './config.env' });
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Security HTTP Headers
app.use(helmet());

// CORS
app.use(cors());

// Rate limiting per IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in one hour',
});
app.use('/api', limiter);

// NoSQL Injection protection
app.use(mongoSanitize());
// XSS Sanatization
app.use(xss());

// protect against HTTP Parameter Pollution attacks
app.use(hpp());

// Body Parser
app.use(express.json({ limit: '10kb' }));

// Prevent crashing the app when one sends incorrect JSON documents
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    res.status(500).json({
      error: 'Incorrect JSON document',
    });
  } else {
    next();
  }
});

// ROUTES
app.use('/api/v1/albums', albumRouter);

export default app;
