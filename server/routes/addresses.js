const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', async (req, res) => {
    try {
      const addrArr = await db.all();
      // this slice is temporary for not going over google api qouta
      const geocodedArr = await db.addrFilter(addrArr.slice(2, 5), req.query);
      res.json(geocodedArr);
    } catch (e) {
      res.json(e);
    }
  });
  return router;
};
