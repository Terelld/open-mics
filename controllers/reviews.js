
// const OpenMic = require("../models/open-mic");
// const Review = require("../models/open-mic");

const {OpenMic, Review} = require("../models/open-mic");

module.exports = {
    create,
    deleteReview, 
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


  

  
