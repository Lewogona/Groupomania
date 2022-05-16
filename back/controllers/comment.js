const db = require("../models");
const Comment = db.comments;

exports.createComment = async (req, res) => {
    let comment = {
        content: req.body.content,
        date: req.body.date,
        userId: req.auth.userId
    };
    const createComment = await Comment.create(comment);
    res.status(201).json(createComment);
}