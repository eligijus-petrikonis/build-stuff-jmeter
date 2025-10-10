const express = require('express');
const router = express.Router();
const util = require('./util');

router.get('/slow', function (req, res, next) {
  const duration = util.randomIntFromInterval(2000000000, 4000000000);
  util.sleepInWhile(duration);
  res.status(200).json({message: `I'm slow 🐌`});
});

router.get('/medium', function (req, res, next) {
  const duration = util.randomIntFromInterval(500000000, 1000000000);
  util.sleepInWhile(duration);
  res.status(200).json({message: `I'm medium 😏`});
});

router.get('/fast', function (req, res, next) {
  res.status(200).json({message: `I'm fast 🚀`});
});

module.exports = router;
