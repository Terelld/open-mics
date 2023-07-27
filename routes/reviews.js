const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/:id/reviews', reviewsCtrl.create);

router.post('/:id/reviews/:review_id/delete', reviewsCtrl.deleteReview);

module.exports = router;