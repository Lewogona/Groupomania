let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post");

router.post("/", auth, postCtrl.createPost);
// router.post('/login', postCtrl.login);

module.exports = router;