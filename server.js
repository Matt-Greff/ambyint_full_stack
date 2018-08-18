require('dotenv').config();
const root       = 'build/public'
const express    = require('express');
const fallback   = require('express-history-api-fallback');
const bodyParser = require('body-parser');
const ENV        = process.env.ENV || 'production';
const db         = require('./routes/fakeDB.json');

const PORT = process.env.API_PORT | 8081 // this port needs to match the port in the webapack.config.js -> devServer -> proxy

const exampleRoute   = require('./routes/example.js'  );

const app = express();
app.use(express.static('build/public'));
app.use(express.static('build/js'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/api/example', exampleRoute(db));

//fallback is always to be listed last
app.use(fallback('index.html', { root }));

// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense
app.listen(PORT, () => {console.log('server is up :) ' + PORT)});