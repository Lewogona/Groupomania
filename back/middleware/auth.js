const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decoded = jwt.verify(token, process.env.SECRET);
        const userId = decoded.id;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid user ID";
        } else {
            next();
        }
    } catch(err){
        res.status(401).json({ "msg":"Couldnt Authenticate", error: err.message });
    }
}
