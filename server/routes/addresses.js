const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.allAddr().then((val) => {
      res.json(val);
    }, (err) => {
      res.json(err);
    });
  });
  return router;
};
