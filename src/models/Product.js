const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.DECIMAL(10, 2),
  category: DataTypes.STRING,
  images: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  stock: DataTypes.INTEGER,
  sku: {
    type: DataTypes.STRING,
    unique: true
  },
  manufacturerId: {
    type: DataTypes.UUID,
    references: {
      model: 'Companies',
      key: 'id'
    }
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
});

module.exports = Product; 