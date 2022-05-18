let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const userCtrl = require("../controllers/user")

router.get('/', userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOneUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;