const express = require('express');
const router = express.Router();
const util = require('./util');

router.get('/login', function (req, res, next) {
  const duration = util.randomIntFromInterval(1000000, 5000000);
  util.sleepInWhile(duration);
  res.status(200).json({
    "message": "Login successful.",
    "token": util.generateToken()
  });
});

router.get('/user', function (req, res, next) {
  const duration = util.randomIntFromInterval(10000000, 20000000);
  util.sleepInWhile(duration);
  res.status(200).json(util.generateUser());
})

router.get('/products', function (req, res, next) {
  const duration = util.randomIntFromInterval(1000000000, 2000000000);
  util.sleepInWhile(duration);
  const amount = util.randomIntFromInterval(500, 1000);
  res.status(200).json({ count: amount, products: util.generateProducts(amount) });
})

router.get('/logout', function (req, res, next) {
  const duration = util.randomIntFromInterval(1000, 10000);
  util.sleepInWhile(duration);
  res.status(200).json({
    "message": "User logged out successfully."
  });
});

module.exports = router;
