const db = require("../models");
const Post = db.posts;

exports.createPost = async (req, res) => {
    let post = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        userId: req.auth.userId
    };
    console.log("req.auth", req.auth)
    const createPost = await Post.create(post);
    res.status(201).json(createPost);
}