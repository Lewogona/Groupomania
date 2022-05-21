const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const db = require("../models");
const User = db.users;

exports.signup = async (req, res) => {
    let usr = null;
    try {
        usr = await User.findOne({ where: {email: req.body.email }});
    } catch (e) {
        console.error(e)
    }
    if (!usr) {
        usr = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false
        };
        if (validateForm(usr)) {
            const salt = await bcrypt.genSalt(10);
            usr.password = await bcrypt.hash(usr.password, salt) 
            const created_user = await User.create(usr);
            res.status(201).json(created_user);
        } else {
            res.status(400).json({ error: "At least one of the field is not valid" })
        }
    } else {
        res.status(400).json({ error: "Utilisateur déjà existant" })
    }
};

function validateForm(usr) {
    const validateEmail = validateInput(usr.email, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const validateFirstName = validateInput(usr.firstName, /^[A-zÀ-ú- ]+$/);
    const validateLastName = validateInput(usr.lastName, /^[A-zÀ-ú- ]+$/);
    const validatePassword = validateInput(usr.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

    return validateEmail && validateFirstName && validateLastName && validatePassword
}

function validateInput(element, regex) {
    element = element.trim();
    let match = element.match(regex)
    if (!match || element !== match[0]) {
        return false
    }

    return true;
}

exports.login = async (req, res) => {
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
            res.status(200).json({ token, ...user.dataValues });
        } else {
            res.status(400).json({ error : "Mot de passe incorrect" });
        }
     
    } else{
       res.status(404).json({ error: "Utilisateur inexistant" });
    }
};

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll()
    if (req.user.isAdmin) {
        res.status(200).json(users);
    } else {
        res.status(401).json({ message: "Unauthorized request" })
    }
}

exports.getOneUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id },
    });
    res.status(200).json(user);
}

exports.deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id },
    });
    if (user) {
        if (req.user.isAdmin || req.user.id === user.id) {
            await user.destroy();
            res.status(200).json({ message: "User deleted" })
        } else {
            res.status(401).json({ message: "Unauthorized delete" })
        }
    } else {
        res.status(404).json({ message: "User not found" })
    }
}