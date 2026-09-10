const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

// Create the model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;