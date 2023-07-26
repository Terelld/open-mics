var express = require('express');
var router = express.Router();


const openMicsCtrl = require('../controllers/open-mics');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Get route for /openMics Index
router.get('/', openMicsCtrl.index);


//const openMics = require('../models/open-mics');


//Get /open-mics/new
router.get('/new', openMicsCtrl.new);

router.get('/:id', openMicsCtrl.show);

router.post('/', openMicsCtrl.create);

module.exports = router;
