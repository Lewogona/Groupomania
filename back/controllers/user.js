const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const fs = require('fs').promises;

const db = require("../models");
const User = db.users;

// Create a new user and send it to the database
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
            res.status(400).json({ error: "Au moins un des champs n'est pas valide" })
        }
    } else {
        res.status(400).json({ error: "Utilisateur déjà existant" })
    }
};

// Check if every input is valid
function validateForm(usr) {
    const validateEmail = validateInput(usr.email, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const validateFirstName = validateInput(usr.firstName, /^[A-zÀ-ú- ]+$/);
    const validateLastName = validateInput(usr.lastName, /^[A-zÀ-ú- ]+$/);
    const validatePassword = validateInput(usr.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

    return validateEmail && validateFirstName && validateLastName && validatePassword
}

// Check each input with regex
function validateInput(element, regex) {
    element = element.trim();
    let match = element.match(regex)
    if (!match || element !== match[0]) {
        return false
    }

    return true;
}

// Find if user exists, then create an authentication token
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

// Get all users
exports.getAllUsers = async (req, res) => {
    const users = await User.findAll()
    if (req.user.isAdmin) {
        res.status(200).json(users);
    } else {
        res.status(401).json({ message: "Unauthorized request" })
    }
}

// Get one user with the user id
exports.getOneUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id },
    });
    res.status(200).json(user);
}

// Add or change a profile picture
exports.modifyProfile = async (req, res) => {
    const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    if (req.user.isAdmin || req.user.id.toString() === req.params.id.toString()) {
        const user = await User.findOne({ where: { id: req.params.id } });
        if (user.imageUrl) {
            try {
                await fs.unlink(`images/${user.imageUrl.split("/images/")[1]}`);
            } catch (e) { console.error(e); }
        }
        user.update({ imageUrl });
        await user.save();
        res.status(200).json({ imageUrl });
    } else {
        res.status(401).json({ message: "Mise à jour non autorisée" })
    }
}

// Delete an user if you are an admin or the user themself
exports.deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id },
    });
    if (user) {
        if (req.user.isAdmin || req.user.id === user.id) {
            await user.destroy();
            res.status(200).json({ message: "Utilisateur supprimé" })
        } else {
            res.status(401).json({ message: "Suppression non autorisée" })
        }
    } else {
        res.status(404).json({ message: "Utilisateur non trouvé" })
    }
}