const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:  String, 
    subtitle: String,
    Description: String,
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;