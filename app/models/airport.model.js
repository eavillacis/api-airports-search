const mongoose = require('mongoose');

const AirportSchema = mongoose.Schema({
    airport_code: String,
    airport: String,
    latitude: Number,
    longitude: Number,
}, {
    timestamps: false
});

module.exports = mongoose.model('airport-details', AirportSchema);