var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// Step 1
router.post('/step1-referrer', function (req, res) {
  res.redirect('/step2-customer-details');
});

// Step 2
router.post('/step2-customer-details', function (req, res) {
  res.redirect('/step3-customer-contact');
});

module.exports = router;