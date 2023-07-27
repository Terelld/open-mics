var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Open Mics' });
});

// Login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

//callback url
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/open-mics',
    failureRedirect: '/open-mics'
  }
));


//log out route
router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/');
  });
});



module.exports = router;