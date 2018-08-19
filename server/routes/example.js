const express = require('express');

const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res, next) => {
      setTimeout(() => { //this is to imitate async db queries
        res.json(db)}, 4000)
  })
  
  return router
}