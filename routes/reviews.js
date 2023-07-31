const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

const { updateReview } = require('../controllers/reviews');

router.post('/:id/reviews', reviewsCtrl.create);

router.post('/:id/reviews/:review_id/delete', reviewsCtrl.deleteReview);

router.get('/:id/reviews/:review_id/edit', reviewsCtrl.editReview);

// Route for updating a specific review
router.put('/:id/reviews/:reviewId', reviewsCtrl.updateReview);


module.exports = router;