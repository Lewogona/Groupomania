let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment");

router.post("/", auth, commentCtrl.createComment);

module.exports = router;