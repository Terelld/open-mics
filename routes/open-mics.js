var express = require('express');
var router = express.Router();


const openMicsCtrl = require('../controllers/open-mics');

router.get('/', openMicsCtrl.index);


router.get('/new', openMicsCtrl.new);

router.get('/:id', openMicsCtrl.show);

router.post('/', openMicsCtrl.create);

module.exports = router;
