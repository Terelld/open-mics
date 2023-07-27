require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const {OpenMic, Review} = require('./models/openMic');


// Example CRUD

// Top-level await (using await outside of an async function)
// has been available since Node v14.8
let openMics = await OpenMic.find({});
console.log(openMics);