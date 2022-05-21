let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment");

router.post("/post/:id", auth, commentCtrl.createComment);
router.get("/post/:id", auth, commentCtrl.getAllCommentsOfAPost);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;