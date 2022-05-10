let express = require('express');
let router = express.Router();
const Models = require('./../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const User = Models.User;
 
router.post('/signup', async (req, res) => {
    //res.status(201).json(req.body);
    //add new user and return 201
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    let usr = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        isAdmin: false
    };
    const created_user = await User.create(usr);
    res.status(201).json(created_user);
});

router.post('/login', async (req, res) => {
    let user = null;
    try {
        user = await User.findOne({ where : {email : req.body.email }});
    } catch (e) {
        console.error(e)
    }
    if(user){
        const password_valid = await bcrypt.compare(req.body.password,user.password);
        if(password_valid){
            token = jwt.sign({ "id" : user.id,"email" : user.email },process.env.SECRET);
            console.log(user.email);
            res.status(200).json({ token, ...user.dataValues });
        } else {
            res.status(400).json({ error : "Mot de passe incorrect" });
        }
     
    } else{
       res.status(404).json({ error : "Utilisateur inexistant" });
    }
     
});

module.exports = router;