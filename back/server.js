const express = require('express')
const { Sequelize } = require('sequelize');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

const sequelize = new Sequelize('groupomania', 'Lewo', 'groupomaniaL', {
    host: 'localhost',
    dialect: 'mysql'
});

