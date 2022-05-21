const db = require("../models");
const Comment = db.comments;
const User = db.users;
const Post = db.posts;

exports.createComment = async (req, res) => {
    let comment = {
        content: req.body.content,
        date: req.body.date,
        userId: req.auth.userId,
        postId: req.params.id
    };
    const createComment = await Comment.create(comment);
    await Post.update({ lastCommentedAt: new Date() }, { where: { id: req.params.id } });
    res.status(201).json(createComment);
}

exports.getAllCommentsOfAPost = async (req, res) => {
    const comments = await Comment.findAll({
        where: { postId: req.params.id },
        include: User
    });
    res.status(200).json(comments);
}

exports.deleteComment = async (req, res) => {
    const comment = await Comment.findOne({
        where: { id: req.params.id },
    });
    if (comment) {
        if (req.user.isAdmin || req.user.id.toString() === comment.userId) {
            await comment.destroy();
            res.status(200).json({ message: "Comment deleted" })
        } else {
            res.status(401).json({ message: "Unauthorized delete" });
        }
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
}