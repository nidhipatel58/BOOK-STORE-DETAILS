let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
    },

});

let books = mongoose.model("Books", userSchema)
module.exports = books;