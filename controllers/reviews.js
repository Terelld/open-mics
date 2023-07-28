
// const OpenMic = require("../models/open-mic");
// const Review = require("../models/open-mic");

const {OpenMic, Review} = require("../models/open-mic");

module.exports = {
    create,
    deleteReview,
    editReview, 
    updateReview,
};




async function create(req, res) {
    const openMic = await OpenMic.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    openMic.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await openMic.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
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

    res.render('open-mics/edit', { openMic, review: reviewToEdit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


async function updateReview(req, res) {
  const openMic = await OpenMic.findById(req.params.id);
  const reviewToUpdate = openMic.reviews.id(req.params.review_id);

  try {
    reviewToUpdate.updateOne();
    await openMic.save(); 
  }catch (err) {
    console.log(err);
  }
  res.redirect(`/open-mics/${openMic._id}`);
}


  