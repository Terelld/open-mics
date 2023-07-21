var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const openMicsCtrl = require('../controllers/open-mics');
const openMics = require('../models/open-mics');


//Get /open-mics/new
router.get('/new', openMicsCtrl.new);

module.exports = router;
