const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decoded = jwt.verify(token, process.env.SECRET);
        const userId = decoded.id;
        console.log("decoded", decoded);
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid user ID";
        } else {
            console.log("next");
            next();
        }
    } catch(err){
        res.status(401).json({ "msg":"Couldnt Authenticate", error: err.message });
    }
}
