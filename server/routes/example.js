const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    setTimeout(() => { // this is to imitate async db queries
      res.json(db);
    }, 1000);
  });

  return router;
};
