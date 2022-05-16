const db = require("../models");
const Post = db.posts;
const User = db.users;

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

exports.getAllPosts = async (req, res) => {
    const posts = await Post.findAll({
        include: User
    });
    res.status(200).json(posts);
}