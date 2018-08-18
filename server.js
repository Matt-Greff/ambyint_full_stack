require('dotenv').config();
const express    = require('express');
const root       = `build/public`
const fallback   = require('express-history-api-fallback');
const ENV        = process.env.ENV || 'production';
const bodyParser = require('body-parser');

const PORT = process.env.API_PORT // this port needs to match the port in the webapack.config.js -> devServer -> proxy


const app = express();


// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense
app.get('/api', (req, res) => {
  res.json({pretty: 'much', amazing: 'eh'});
});

app.listen(PORT, () => {console.log("API server is up");});


