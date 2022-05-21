const db = require("../models");
const Post = db.posts;
const User = db.users;

exports.createPost = async (req, res) => {
    let post = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        userId: req.auth.userId,
        lastcommented: null
    };
    const createPost = await Post.create(post);
    res.status(201).json(createPost);
}

exports.getAllPosts = async (req, res) => {
    const posts = await Post.findAll({
        include: User,
        order: [["createdAt", "DESC"]]
    });
    res.status(200).json(posts);
}

exports.getAllPostsByLastParticipations = async (req, res) => {
    const posts = await Post.findAll({
        include: User,
        order: [["updatedAt", "DESC"]]
    });
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
        if (req.user.dataValues.isAdmin || req.auth.userId === req.user.dataValues.id) {
            await post.destroy();
        } else {
            res.status(401).json({ message: "Unauthorized delete" })
        }
    }
    res.status(200).json({ message: "Post deleted" })
}