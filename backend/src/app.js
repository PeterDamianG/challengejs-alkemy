import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import errorHandler from './middlewares/errorHandler.js';
import login from './api/login.js';
import users from './api/users.js';
import records from './api/records.js';

// We need to change up how __dirname is used for ES6 purposes
// @ts-ignore
const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const app = express();
// Middlewares
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(dirName, '../../frontend/build')));
// Routes Backend API
app.use('/api/login', login);
app.use('/api/users', users);
app.use('/api/records', records);
// Routes Frontend APP
app.get('*', (_, res) => {
  res.sendFile(path.join(dirName, '../../frontend/build/index.html'));
});
// Error is last resource to controller troubles.
app.use(errorHandler);
app.use((_, res) => {
  res.status(404).send('Sorry cant find that!');
});

export default app;
