let express = require('express');
let router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const userCtrl = require("../controllers/user")

router.get('/', auth, userCtrl.getAllUsers);
router.get("/:id", auth, userCtrl.getOneUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', auth, multer, userCtrl.modifyProfile);
router.delete("/:id", auth, multer, userCtrl.deleteUser);

module.exports = router;