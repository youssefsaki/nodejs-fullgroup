const mongoose = require('mongoose');

//* Creating The Schema
const postSchema = new mongoose.Schema({
    title: String,
    body: { type: String, required: true },
    author: { type: String, required: true },
}, { timestamps: true });

//* Creating The Model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;