const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validate.isEmail,
            message: "Invalid email format",
        },
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z\s]+$/.test(value); // only letters and spaces
            },
            message: "Invalid city name. Can only contain spaces and letters.",
        },
        website: {
            type: String,
            required: true,
            validate: {
                validator: validator.isURL,
                message: "Invalid website url",
            },
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^\d{5}-\d{4}$/.test(value); // 5-4
                },
                message: "Invalid zip code format.",
            },
        },
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^\d-\d{3}-\d{3}-\d{4}$/.test(value); // 1-3-3-4
                },
                message: "Invalid phone number format",
            },
        },
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
