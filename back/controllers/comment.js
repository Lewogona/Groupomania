const db = require("../models");
const Comment = db.comments;
const User = db.users;
const Post = db.posts;

// Create a new comment and send it to the database
exports.createComment = async (req, res) => {
    if(req.body.content) {
        let comment = {
            content: req.body.content,
            date: req.body.date,
            userId: req.auth.userId,
            postId: req.params.id
        };
        const createComment = await Comment.create(comment);
        await Post.update({ lastCommentedAt: new Date() }, { where: { id: req.params.id } });
        res.status(201).json(createComment);
    } else {
        res.status(400).json({ message: "Commentaire vide" })
    }
}

// Get all comments of one post using its id
exports.getAllCommentsOfAPost = async (req, res) => {
    const comments = await Comment.findAll({
        where: { postId: req.params.id },
        include: User
    });
    res.status(200).json(comments);
}

// Delete a comment if you are an admin or the user who created the comment
exports.deleteComment = async (req, res) => {
    const comment = await Comment.findOne({
        where: { id: req.params.id },
    });
    if (comment) {
        if (req.user.isAdmin || req.user.id.toString() === comment.userId) {
            await comment.destroy();
            res.status(200).json({ message: "Commentaire supprimé" })
        } else {
            res.status(401).json({ message: "Suppression non autorisée" });
        }
    } else {
        res.status(404).json({ message: "Commentaire non trouvé" });
    }
}