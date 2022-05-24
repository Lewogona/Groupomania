'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql"
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user")(sequelize, Sequelize);
db.posts = require("./post")(sequelize, Sequelize);
db.comments = require("./comment")(sequelize, Sequelize);

db.users.hasMany(db.posts, {
    foreignKey: { 
        name: "userId" 
    }
});
db.posts.belongsTo(db.users);

db.users.hasMany(db.comments, {
    foreignKey: {
        name: "userId"
    }
});
db.comments.belongsTo(db.users);

db.posts.hasMany(db.comments, {
    foreignKey: {
        name: "postId"
    }
});
db.comments.belongsTo(db.posts);

module.exports = db;
