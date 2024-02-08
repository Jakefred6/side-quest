const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    // Add more fields as needed, like password, profile picture, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
