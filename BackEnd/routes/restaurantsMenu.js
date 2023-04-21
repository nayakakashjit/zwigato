const express = require('express');
const router = express.Router();
const resturantsMenuModel = require('../models/restaurantMenu.model.js');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
    const resturantId = parseInt(req.query.restaurantId);
    resturantsMenuModel.find({ 'restaurant_id': resturantId })
        .then((data) => {
            res.send({ status: 200, data })
        })
        .catch((error) => {
            res.send({ status: 400, message: error });
        })
});

module.exports = router;