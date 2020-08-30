const mongoose = require("mongoose");
const { getSupportInfo } = require("prettier");
const Schema = mongoose.Schema;


// Create Schema 
const UserSchema = new Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        reqired: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model("users", UserSchema);