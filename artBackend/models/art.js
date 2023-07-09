const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    picture: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model('art', dataSchema)