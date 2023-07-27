
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    experience: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    }, {
        timestamps: true
});




const openMicSchema = new Schema ({
    venue: String,
    address: String,
    openMicDay: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    time: String,
    band: {
        type: String,
        enum: ['yes', 'no']
    },
    reviews: [reviewSchema],
    rating: String, //this will be averaged form all reviews and converted to string.
});



var OpenMic = mongoose.model('OpenMic', openMicSchema);
var Review = mongoose.model('Review', reviewSchema);

module.exports = {
    OpenMic, 
    Review
}