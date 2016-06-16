var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// Referrer
router.post('/1-referrer', function (req, res) {
  res.redirect('/2-customer-details');
});

// Customer
router.post('/2-customer-details', function (req, res) {
  res.redirect('/2-customer-contact');
});

router.post('/2-customer-contact', function (req, res) {
  res.redirect('/3-representative-details');
});

// Representative
router.post('/3-representative-details', function (req, res) {
  res.redirect('/3-representative-contact');
});

router.post('/3-representative-contact', function (req, res) {
  res.redirect('/4-visit-details');
});

// Visit
router.post('/4-visit-details', function (req, res) {
  res.redirect('/4-visit-address');
});

router.post('/4-visit-address', function (req, res) {
  res.redirect('/4-visit-other');
});

router.post('/4-visit-other', function (req, res) {
  res.redirect('/5-attachments');
});

// Attachments

router.post('/5-attachments', function (req, res) {
  res.redirect('/6-check-your-answers');
});

// Check your answers

router.post('/6-check-your-answers', function (req, res) {
  res.redirect('/7-confirmation');
});

module.exports = router;