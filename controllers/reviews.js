
const {OpenMic, Review} = require("../models/open-mic");

module.exports = {
    create,
    deleteReview,
    editReview, 
    updateReview,
};




async function create(req, res) {
    const openMic = await OpenMic.findById(req.params.id);
    
    openMic.reviews.push(req.body);
    try {
      await openMic.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/open-mics/${openMic._id}`);
  }

  

  async function deleteReview(req, res) {
    const openMic = await OpenMic.findById(req.params.id);
    
    const reviewToDelete = openMic.reviews.id(req.params.review_id);

    try {
      reviewToDelete.deleteOne();
      await openMic.save();
    }catch (err) {
        console.log(err);
    }
    res.redirect(`/open-mics/${openMic._id}`);
    console.log('review removed', deleteReview);
}

async function editReview(req, res) {
  try {
    const openMic = await OpenMic.findOne({ _id: req.params.id });

    if (!openMic) {
      return res.redirect('/open-mics');
    }
    const reviewToEdit = openMic.reviews.id(req.params.review_id);

    if (!reviewToEdit) {
      return res.redirect(`/open-mics/${openMic._id}`);
    }

    res.render('open-mics/edit', { openMic, review: reviewToEdit, title: 'Update Your Open Mic Review' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateReview(req, res) {

  const openMic = await OpenMic.findById(req.params.id)
  console.log(req.params.reviewId)
  const index = openMic.reviews.findIndex(function (review) {
    console.log(review._id)
    return review._id == req.params.reviewId
  })
  console.log(index)
  openMic.reviews[index] = req.body
  try {
    await openMic.save()
    return res.redirect(`/open-mics/${req.params.id}`);

  } catch (err) {
    console.log(err.message);
    return res.redirect(`/open-mics/${req.params.id}`);
  }
}




