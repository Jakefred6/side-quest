const mongoose = require('mongoose');
const { Schema } = mongoose;

const questSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    continent: { type: String, enum: ['NA', 'SA', 'EU', 'AF', 'AS', 'OC'], required: true },
    country_city: { type: String, required: true },
    xp: { type: Number, required: true },
    location: {type: String, required: true},
    username: {type: String, required: true}
});

const Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;
