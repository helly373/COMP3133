const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    city: String,
    address: {
        building: String,
        street: String,
        zipcode: String
    },
    restaurant_id: String
},{collection: 'restaurants'});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
