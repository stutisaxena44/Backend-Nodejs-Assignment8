const mongoose = require('mongoose');

// Define the user schema with the required fields
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true }
});

module.exports = userSchema;