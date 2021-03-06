const root = `${__dirname}/../client/build/public`;
require('dotenv').config();

const express = require('express');
const fallback = require('express-history-api-fallback');
const bodyParser = require('body-parser');
const db = require('./db/db.js');

const ENV = process.env.ENV || 'production';

// this port needs to match the port in the webapack.config.js -> devServer -> proxy
const PORT = process.env.PORT || 8081;

const addressRoute = require('./routes/addresses.js');

const app = express();
app.use(express.static(root));
app.use(express.static(`${__dirname}/../client/build/js`));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/api/addresses', addressRoute(db));

// fallback is always to be listed last
app.use(fallback('index.html', { root }));

// can be GETted through the webpack-dev-server at localhost:8080/api
app.listen(PORT, () => { console.log(`server is up :) ${PORT} ${ENV}`); });

module.exports = app;
