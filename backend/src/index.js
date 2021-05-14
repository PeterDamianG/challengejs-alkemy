import http from 'http';
import { PORT } from './config/index.js';
import app from './app.js';

const server = http.createServer(app);

const startServer = async () => {
  server.listen(PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready! On http://localhost:${PORT}/`);
  });
};

startServer();
