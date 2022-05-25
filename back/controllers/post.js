const fs = require("fs").promises;
const db = require("../models");
const Post = db.posts;
const User = db.users;

// Create a new post and send it to the database
exports.createPost = async (req, res) => {
    if (req.body.title && req.body.content) {
        let post = {
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            userId: req.auth.userId,
            lastCommentedAt: null,
            imageUrl: req.file ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`: null
        };
        const createPost = await Post.create(post);
        res.status(201).json(createPost);
    }
    if (!req.body.title) {
        res.status(400).json({ message: "Titre manquant"})
    } else if (!req.body.content) {
        res.status(400).json({ message: "Post vide" })
    }
}


// Get all posts from the newest to the oldest 
exports.getAllPosts = async (req, res) => {
    const posts = await Post.findAll({
        include: User,
        order: [["createdAt", "DESC"]]
    });
    res.status(200).json(posts);
}

// Get all posts from the newest participations (new comment and/or new post)
exports.getAllPostsByLastParticipations = async (req, res) => {
    const posts = await Post.findAll({
        include: User,
        order: [["updatedAt", "DESC"]]
    });
    res.status(200).json(posts);
}

// Get one post using its id
exports.getOnePost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id },
        include: User
    });
    res.status(200).json(post);
}

// Delete a post if you are an admin or the user who created the post
exports.deletePost = async (req, res) => {
    const post = await Post.findOne({
        where: { id: req.params.id },
    });
    if (post) {
        if (req.user.isAdmin || req.user.id.toString() === post.userId) {
            // If there is an image in the post, delete the image as well
            if (post.imageUrl) {
                const filename = post.imageUrl.split("/images/")[1];
                await fs.unlink(`images/${filename}`);
            }
            await post.destroy();
            res.status(200).json({ message: "Post supprimé" })
        } else {
            res.status(401).json({ message: "Suppression non autorisée" })
        }
    } else {
        res.status(404).json({ message: "Post non trouvé" })
    }
}