const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smoke_trees_database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
