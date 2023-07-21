const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const openMicSchema = new Schema ({
    venue: String,
    address: String,
    openMicDay: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
    },
    time: String,
    band: {
        type: String,
        enum: ['yes', 'no']
    },
    rating: String, //this will be averaged form all reviews and converted to string.
})


module.exports = mongoose.model('OpenMic', openMicSchema);