const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    url: {
        type: String,
        required: [true, 'Please add a URL'],
    }
}, { timestamps: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);