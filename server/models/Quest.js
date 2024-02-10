const mongoose = require('mongoose');
const { Schema } = mongoose;

const questSchema = new Schema({
    title: { type: String, required: true },
    //description: { type: String, required: true },
    continent: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7], required: true },
    //country_city: { type: String, required: true },
    xp: { type: Number, required: true },
    //location: {type: String, required: true},
    username: {type: String,}
});

const Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;
