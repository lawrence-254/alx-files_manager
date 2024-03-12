/*
 * an express module that listens to port 5000
 */
import express from 'express';
const app = express();
import routes from './routes';
const PORT = 5000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`this app listens to port ${PORT}`);
});
