let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post");

router.post("/", auth, postCtrl.createPost);
router.get("/", postCtrl.getAllPosts);
router.get("/:id", postCtrl.getOnePost);

module.exports = router;