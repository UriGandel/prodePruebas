const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prodeDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});
const Users = require('@/models/Users');
sequelize.models.Users = Users;

module.exports = sequelize;