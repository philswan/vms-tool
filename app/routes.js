var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});



////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// V1 ROUTES
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// V2 ROUTES
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// REFERRER
/////////////////////////


// Referrer
router.post('/v2/referrer', function (req, res) {
  res.redirect('/v2/customer-nino');
});

// Referrer details check
router.get('/v2/referrer/edit', function (req, res) {
  res.render('v2/referrer', {'edit':true} );
});

// CUSTOMER
/////////////////////////

// Customer National Insurance number
router.post('/v2/customer-nino', function (req, res) {
  res.redirect('/v2/customer-details');
});

// Customer National Insurance check
router.get('/v2/customer-nino/edit', function (req, res) {
  res.render('v2/customer-nino', {'edit':true} );
});


// Customer details
router.post('/v2/customer-details', function (req, res) {
  res.redirect('/v2/customer-contact');
});

// Customer details check
router.get('/v2/customer-details/edit', function (req, res) {
  res.render('v2/customer-details', {'edit':true} );
});

// Customer contact
router.post('/v2/customer-contact', function (req, res) {
  res.redirect('/v2/representative-details');
});

// Customer contact check
router.get('/v2/customer-contact/edit', function (req, res) {
  res.render('v2/customer-contact', {'edit':true} );
});

// REPRESENTATIVE
/////////////////////////

// Representative details
router.post('/v2/representative-details', function (req, res) {
  res.redirect('/v2/visit-details');
});

// Representative details check
router.get('/v2/representative-details/edit', function (req, res) {
  res.render('v2/representative-details', {'edit':true} );
});


// VISIT
/////////////////////////


// Visit details
router.post('/v2/visit-details', function (req, res) {
  res.redirect('/v2/visit-address');
});

// Visit details check
router.get('/v2/visit-details/edit', function (req, res) {
  res.render('v2/visit-details', {'edit':true} );
});

// Visit address
router.post('/v2/visit-address', function (req, res) {
  res.redirect('/v2/visit-other');
});

// Visit address check
router.get('/v2/visit-address/edit', function (req, res) {
  res.render('v2/visit-address', {'edit':true} );
});

// Visit other
router.post('/v2/visit-other', function (req, res) {
  res.redirect('/v2/attachments');
});

// Visit other check
router.get('/v2/visit-other/edit', function (req, res) {
  res.render('v2/visit-other', {'edit':true} );
});

// ATTACHMENTS
/////////////////////////

// Attachments
router.post('/v2/attachments', function (req, res) {
  res.redirect('/v2/check-your-answers');
});

// Attachments check
router.get('/v2/attachments/edit', function (req, res) {
  res.render('v2/attachments', {'edit':true} );
});

// Check your answers
router.post('/v2/check-your-answers', function (req, res) {
  res.redirect('/v2/confirmation');
});

// Check your answers save
router.get('/v2/check-your-answers/saved', function (req, res) {
  res.render('v2/check-your-answers', {'saved':true} );
});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// V3 ROUTES
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// REFERRER
/////////////////////////


// Referrer
router.post('/v3/referrer', function (req, res) {
  res.redirect('/v3/customer-nino');
});

// Referrer details check
router.get('/v3/referrer/edit', function (req, res) {
  res.render('v3/referrer', {'edit':true} );
});

// CUSTOMER
/////////////////////////

// Customer National Insurance number
router.post('/v3/customer-nino', function (req, res) {
  res.redirect('/v3/customer-details');
});

// Customer National Insurance check
router.get('/v3/customer-nino/edit', function (req, res) {
  res.render('v3/customer-nino', {'edit':true} );
});


// Customer details
router.post('/v3/customer-details', function (req, res) {
  res.redirect('/v3/customer-contact');
});

// Customer details check
router.get('/v3/customer-details/edit', function (req, res) {
  res.render('v3/customer-details', {'edit':true} );
});

// Customer contact
router.post('/v3/customer-contact', function (req, res) {
  res.redirect('/v3/representative-details');
});

// Customer contact check
router.get('/v3/customer-contact/edit', function (req, res) {
  res.render('v3/customer-contact', {'edit':true} );
});

// REPRESENTATIVE
/////////////////////////

// Representative details
router.post('/v3/representative-details', function (req, res) {
  res.redirect('/v3/visit-details');
});

// Representative details check
router.get('/v3/representative-details/edit', function (req, res) {
  res.render('v3/representative-details', {'edit':true} );
});


// VISIT
/////////////////////////


// Visit details
router.post('/v3/visit-details', function (req, res) {
  res.redirect('/v3/visit-address');
});

// Visit details check
router.get('/v3/visit-details/edit', function (req, res) {
  res.render('v3/visit-details', {'edit':true} );
});

// Visit address
router.post('/v3/visit-address', function (req, res) {
  res.redirect('/v3/visit-other');
});

// Visit address check
router.get('/v3/visit-address/edit', function (req, res) {
  res.render('v3/visit-address', {'edit':true} );
});

// Visit other
router.post('/v3/visit-other', function (req, res) {
  res.redirect('/v3/attachments');
});

// Visit other check
router.get('/v3/visit-other/edit', function (req, res) {
  res.render('v3/visit-other', {'edit':true} );
});

// ATTACHMENTS
/////////////////////////

// Attachments
router.post('/v3/attachments', function (req, res) {
  res.redirect('/v3/check-your-answers');
});

// Attachments check
router.get('/v3/attachments/edit', function (req, res) {
  res.render('v3/attachments', {'edit':true} );
});

// Check your answers
router.post('/v3/check-your-answers', function (req, res) {
  res.redirect('/v3/confirmation');
});

// Check your answers save
router.get('/v3/check-your-answers/saved', function (req, res) {
  res.render('v3/check-your-answers', {'saved':true} );
});

module.exports = router;