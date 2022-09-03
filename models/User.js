const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    profile_pic: {
        type: String
    }
},
    { timestamps: true }
)

const User = mongoose.model('User', schema)

module.exports = { User }