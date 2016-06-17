var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// REFERRER
/////////////////////////

// Referrer
router.post('/1-referrer', function (req, res) {
  res.redirect('/2-customer-details');
});

// Referrer details check
router.get('/1-referrer/edit', function (req, res) {
  res.render('1-referrer', {'edit':true} );
});

// CUSTOMER
/////////////////////////

// Customer details
router.post('/2-customer-details', function (req, res) {
  res.redirect('/2-customer-contact');
});

// Customer details check
router.get('/2-customer-details/edit', function (req, res) {
  res.render('2-customer-details', {'edit':true} );
});

// Customer contact
router.post('/2-customer-contact', function (req, res) {
  res.redirect('/3-representative-details');
});

// Customer contact check
router.get('/2-customer-contact/edit', function (req, res) {
  res.render('2-customer-contact', {'edit':true} );
});

// REPRESENTATIVE
/////////////////////////

// Representative details
router.post('/3-representative-details', function (req, res) {
  res.redirect('/3-representative-contact');
});

// Representative details check
router.get('/3-representative-details/edit', function (req, res) {
  res.render('3-representative-details', {'edit':true} );
});

// Representative contact
router.post('/3-representative-contact', function (req, res) {
  res.redirect('/4-visit-details');
});

// Representative contact check
router.get('/3-representative-contact/edit', function (req, res) {
  res.render('3-representative-contact', {'edit':true} );
});

// VISIT
/////////////////////////


// Visit details
router.post('/4-visit-details', function (req, res) {
  res.redirect('/4-visit-address');
});

// Visit details check
router.get('/4-visit-details/edit', function (req, res) {
  res.render('4-visit-details', {'edit':true} );
});

// Visit address
router.post('/4-visit-address', function (req, res) {
  res.redirect('/4-visit-other');
});

// Visit address check
router.get('/4-visit-address/edit', function (req, res) {
  res.render('4-visit-address', {'edit':true} );
});

// Visit other
router.post('/4-visit-other', function (req, res) {
  res.redirect('/5-attachments');
});

// Visit other check
router.get('/4-visit-other/edit', function (req, res) {
  res.render('4-visit-other', {'edit':true} );
});

// ATTACHMENTS
/////////////////////////

// Attachments
router.post('/5-attachments', function (req, res) {
  res.redirect('/6-check-your-answers');
});

// Attachments check
router.get('/5-attachments/edit', function (req, res) {
  res.render('5-attachments', {'edit':true} );
});

// Check your answers
router.post('/6-check-your-answers', function (req, res) {
  res.redirect('/7-confirmation');
});

// Check your answers save
router.get('/6-check-your-answers/saved', function (req, res) {
  res.render('6-check-your-answers', {'saved':true} );
});


module.exports = router;