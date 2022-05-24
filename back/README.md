# Groupomania Social Network API

This project was created with :
- [NodeJS](https://nodejs.org/en/) 
- [Nodemon](https://nodemon.io/)
- [Express](https://github.com/expressjs/express)
- [Sequelize](https://sequelize.org/) with [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli) and [MySQL2](https://www.npmjs.com/package/mysql2)
- [JSON Web Token](https://github.com/joaquimserafim/json-web-token)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Multer](https://github.com/expressjs/multer)
- [dotenv](https://www.npmjs.com/package/dotenv)

## DATABASE

### Install

Follow this [tutorial (fr)](https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7152681-installez-le-sgbd-mysql) to install MySql

### Create a new database

Follow this [tutorial (fr)](https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7142232-creez-votre-base-de-donnees-bdd) to create a new database

### Create your .env file

Create your .env file in the back folder. If you intend to publish this project in GitHub, don't forget to add your .env file in your .gitignore.

In your .env file, add :
```
SECRET=putYourOwnString
MYSQL_USERNAME=putYourSQLusername
MYSQL_PASSWORD=putYourSQLpassword
MYSQL_DATABASE=putYourSQLdatabaseName
MYSQL_HOST=localhost
```

### Migrate the models into your database

In your terminal, run `npx sequelize-cli db:migrate`


## Install

Run `npm install` to install the dependencies. 

### Run the app

Run `npm start` to launch the API.

## REST API

You can see below all the available API routes

### User

- POST `/users/signup` to signup
- POST `/users/login` to login
- GET `/users/` to get all users
- GET `/users/:id` to get one user
- PUT `/users/:id` to modify one user
- DELETE `/users/:id` to delete one user

### Post

- POST `/posts/` to create a new post
- GET `/posts/` to get all posts
- GET `/posts/:id` to get one post
- GET `/posts/last` to get all posts by last participations order
- DELETE `/posts/:id` to delete a post

### Comment

- POST `/comments/post/:id` to create a new comment
- GET `/comments/post/:id` to get all comments of a post
- DELETE `/comments/:id` to delete a comment