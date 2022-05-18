let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post");

router.post("/", auth, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/last", auth, postCtrl.getAllPostsByLastParticipations);
router.get("/:id", postCtrl.getOnePost);
router.delete("/:id", postCtrl.deletePost)

module.exports = router;