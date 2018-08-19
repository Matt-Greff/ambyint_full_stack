const root = 'build/public';
require('dotenv').config();
const express = require('express');
const fallback = require('express-history-api-fallback');
const bodyParser = require('body-parser');
const db = require('./routes/fakeDB.json');

const ENV = process.env.ENV || 'production';

// this port needs to match the port in the webapack.config.js -> devServer -> proxy
const PORT = process.env.API_PORT || 8081;

const exampleRoute = require('./routes/example.js');

const app = express();
app.use(express.static('build/public'));
app.use(express.static('build/js'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/api/example', exampleRoute(db));

// fallback is always to be listed last
app.use(fallback('index.html', { root }));

// can be GETted through the webpack-dev-server at localhost:8080/api
app.listen(PORT, () => { console.log(`server is up :) ${PORT} ${ENV}`); });
