var mongoose = require('mongoose');
var restaurantMenuSchema = mongoose.Schema(
    {
        restaurant_id: Number,
        menu_id: Number,
        menu_name: String,
        description: String,
        menu_image: String,
        menu_type: String,
        menu_price: Number
    }
)

var resturantsMenuModel = mongoose.model('menus', restaurantMenuSchema);
module.exports = resturantsMenuModel;