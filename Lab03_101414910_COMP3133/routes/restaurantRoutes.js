const express = require('express')
const Restaurant = require('../models/restaurant');
const router = express.Router();

router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const { cuisine } = req.params;
        const restaurants = await Restaurant.find({ cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants/sorted', async (req, res) => {
    try {
        const { sortBy } = req.query;
        const sortOrder = sortBy === "DESC" ? -1 : 1;
        
        const restaurants = await Restaurant.find({}, { _id: 1, cuisines: 1, name: 1, city: 1, restaurant_id: 1 })
                                           .sort({ restaurant_id: sortOrder });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: "Delicatessen",
            city: { $ne: "Brooklyn" }
        }, { _id: 0, cuisines: 1, name: 1, city: 1 })
        .sort({ name: 1 });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;