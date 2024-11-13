const { default: mongoose } = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    adminId : String,
    likeBy : Array,
    date: { type: Date, default: Date.now }
})

const blogs = mongoose.model("Blog", blogSchema);

module.exports = blogs;