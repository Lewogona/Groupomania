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
    const createPost = await Post.create(post);
    res.status(201).json(createPost);
}

exports.getAllPosts = async (req, res) => {
    const posts = await Post.findAll({
        include: User
    });
    console.log("Hello")
    res.status(200).json(posts);
}

exports.getOnePost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id },
        include: User
    });
    res.status(200).json(post);
}

exports.deletePost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id },
    });
    if (post) {
        await post.destroy();
    }
    res.status(200).json({ message: "post supprimé" })
}