/*
 * an express module that listens to port 5000
 */
const express = require('express');
const app = express();
const route = require('./routes');
const PORT = 5000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`this app listens to port ${PORT}`);
}
