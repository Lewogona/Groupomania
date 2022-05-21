const jwt = require("jsonwebtoken");
require('dotenv').config();

const db = require("../models");
const User = db.users;

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decoded = jwt.verify(token, process.env.SECRET);
        const userId = decoded.id;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid user ID";
        } else {
            const user = await User.findOne({ where: { id: userId } })
            req.user = { ...user }
            next();
        }
    } catch(err){
        res.status(401).json({ "msg":"Couldnt Authenticate", error: err.message });
    }
}
