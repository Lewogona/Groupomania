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
        if (req.user.dataValues.isAdmin || req.auth.userId === req.user.dataValues.id) {
            await comment.destroy();
        } else {
            res.status(401).json({ message: "Unauthorized delete" })
        }
    }
    res.status(200).json({ message: "Comment deleted" })
}