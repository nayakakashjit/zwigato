var mongoose = require('mongoose');
var resturantsSchema = mongoose.Schema(
    {
        restaurant_id: Number,
        restaurant_name: String,
        location_id: Number,
        state_id: Number,
        address: String,
        restaurant_thumb: String,
        average_rating: Number,
        rating_text: String,
        cost: Number,
        contact_number: Number,
        mealTypes: Object,
        cuisines: Object,
        image_gallery:Array
    }
)

var resturantsModel = mongoose.model('resturants', resturantsSchema);
module.exports = resturantsModel;