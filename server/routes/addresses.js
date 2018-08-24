const express = require('express');
const geo = require('../route_handlers/geocoding.js');

const router = express.Router();

module.exports = (db) => {
  router.get('/', async (req, res) => {
    try {
      const addrArr = await db._csvHandler('addresses.csv');
      const geocodedArr = await geo._getAndValidateGeo(addrArr, { locationType: 'ROOFTOP' });
      res.json({ addresses: geocodedArr, status: 'OK' });
    } catch (e) {
      res.status(500).json({ status: 'err', err: 'Could not fetch addresses...' });
    }
  });
  return router;
};
