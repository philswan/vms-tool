var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// REFERRER
/////////////////////////

// Referrer
router.post('/v1/referrer', function (req, res) {
  res.redirect('/v1/customer-details');
});

// Referrer details check
router.get('/v1/referrer/edit', function (req, res) {
  res.render('v1/referrer', {'edit':true} );
});

// CUSTOMER
/////////////////////////

// Customer details
router.post('/v1/customer-details', function (req, res) {
  res.redirect('/v1/customer-contact');
});

// Customer details check
router.get('/v1/customer-details/edit', function (req, res) {
  res.render('v1/customer-details', {'edit':true} );
});

// Customer contact
router.post('/v1/customer-contact', function (req, res) {
  res.redirect('/v1/representative-details');
});

// Customer contact check
router.get('/v1/customer-contact/edit', function (req, res) {
  res.render('v1/customer-contact', {'edit':true} );
});

// REPRESENTATIVE
/////////////////////////

// Representative details
router.post('/v1/representative-details', function (req, res) {
  res.redirect('/v1/representative-contact');
});

// Representative details check
router.get('/v1/representative-details/edit', function (req, res) {
  res.render('v1/representative-details', {'edit':true} );
});

// Representative contact
router.post('/v1/representative-contact', function (req, res) {
  res.redirect('/v1/visit-details');
});

// Representative contact check
router.get('/v1/representative-contact/edit', function (req, res) {
  res.render('v1/representative-contact', {'edit':true} );
});

// VISIT
/////////////////////////


// Visit details
router.post('/v1/visit-details', function (req, res) {
  res.redirect('/v1/visit-address');
});

// Visit details check
router.get('/v1/visit-details/edit', function (req, res) {
  res.render('v1/visit-details', {'edit':true} );
});

// Visit address
router.post('/v1/visit-address', function (req, res) {
  res.redirect('/v1/visit-other');
});

// Visit address check
router.get('/v1/visit-address/edit', function (req, res) {
  res.render('v1/visit-address', {'edit':true} );
});

// Visit other
router.post('/v1/visit-other', function (req, res) {
  res.redirect('/v1/attachments');
});

// Visit other check
router.get('/v1/visit-other/edit', function (req, res) {
  res.render('v1/visit-other', {'edit':true} );
});

// ATTACHMENTS
/////////////////////////

// Attachments
router.post('/v1/attachments', function (req, res) {
  res.redirect('/v1/check-your-answers');
});

// Attachments check
router.get('/v1/attachments/edit', function (req, res) {
  res.render('v1/attachments', {'edit':true} );
});

// Check your answers
router.post('/v1/check-your-answers', function (req, res) {
  res.redirect('/v1/confirmation');
});

// Check your answers save
router.get('/v1/check-your-answers/saved', function (req, res) {
  res.render('v1/check-your-answers', {'saved':true} );
});


module.exports = router;