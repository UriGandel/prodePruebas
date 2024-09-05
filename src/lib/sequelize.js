const { Sequelize, SequelizeScopeError } = require('sequelize');

const sequelize = new Sequelize('prodeDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});
const Users = require('@/models/Users');



module.exports = sequelize;