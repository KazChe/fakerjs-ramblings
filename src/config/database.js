const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'faker_user',
  password: 'faker_password',
  database: 'faker_demo',
  logging: false
});

module.exports = { sequelize };
