const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  avatar: DataTypes.STRING,
  companyId: {
    type: DataTypes.UUID,
    references: {
      model: 'Companies',
      key: 'id'
    },
    field: 'companyId'
  }
}, {
  tableName: 'Users',
  timestamps: true,
  underscored: false
});

module.exports = User; 