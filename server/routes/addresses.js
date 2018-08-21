const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', async (req, res) => {
    try {
      const addr = await db.all();
      res.json(addr);
    } catch (e) {
      res.json(e);
    }
  });
  return router;
};
