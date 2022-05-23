let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const postCtrl = require("../controllers/post");

router.post("/", auth, multer, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/last", auth, postCtrl.getAllPostsByLastParticipations);
router.get("/:id", auth, postCtrl.getOnePost);
router.delete("/:id", auth, multer, postCtrl.deletePost)

module.exports = router;