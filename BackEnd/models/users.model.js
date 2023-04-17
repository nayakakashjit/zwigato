var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024
        },
        mobile: {
            type: Number,
            required: true,
            minlength: 10,
            maxlength: 15
        }
    }
);

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        mobile: Joi.number().min(10).max(15).required(),
    };
    return Joi.validate(user, schema);
}

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;
exports.validate = validateUser;