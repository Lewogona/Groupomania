const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const db = require("../models");
const User = db.users;
const Post = db.posts;

exports.signup = async (req, res) => {
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
};

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
       res.status(404).json({ error : "Utilisateur inexistant" });
    }
};



// exports.findUserById = (userId) => {
//     return User.findByPk(UserId, { include:["post"] })
//         .then((user) => {
//             return user;
//         })
//         .catch((err) => {
//             console.log(">> Error while finding user: ", err);
//         });
// };

// exports.findPostById = (id) => {
//     return Post.findByPk(id, { include: ["user"] })
//         .then((post) => {
//             return post;
//         })
//         .catch((err) => {
//             console.log(">> Error while finding post: ", err);
//         });
// };

// exports.findAll = () => {
//     return User.findAll({
//         include: ["post"],
//     }).then((users) => {
//         return users
//     });
// }