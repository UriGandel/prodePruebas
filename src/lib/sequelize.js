
const Sequelize  = require('sequelize');
const sequelize = new Sequelize('prodeDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // o 'postgres', 'sqlite', 'mariadb', 'mssql'
});

module.exports = sequelize;