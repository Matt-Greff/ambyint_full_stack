const express = require('express');

const router = express.Router();

module.exports = (db) => {
  router.get('/', async (req, res) => {
    try {
      const addrArr = await db.csvHandler(req.query);
      const geocodedArr = await db.getAndValidateGeocodes(addrArr);
      res.json(geocodedArr);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  return router;
};
