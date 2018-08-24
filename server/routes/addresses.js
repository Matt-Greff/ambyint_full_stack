const express = require('express');
const geo = require('../route_handlers/geocoding.js');

const router = express.Router();

module.exports = (db) => {
  router.get('/', async (req, res, next) => {
    try {
      const addrArr = await db._csvHandler('addresses.csv');
      const geocodedArr = await geo._getAndValidateGeo(addrArr, { locationType: 'ROOFTOP' });
      res.json(geocodedArr);
    } catch (e) {
      next(e);
    }
  });
  return router;
};
