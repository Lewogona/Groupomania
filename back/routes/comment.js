let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment");

router.post("/post/:id", auth, commentCtrl.createComment);
router.get("/post/:id", commentCtrl.getAllCommentsOfAPost);

module.exports = router;