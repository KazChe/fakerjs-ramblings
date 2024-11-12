const { sequelize } = require("../config/database");
const User = require("./User");
const Company = require("./Company");
const Product = require("./Product");

// Define relationships
Company.hasMany(User, {
  foreignKey: {
    name: "companyId",
    field: "companyId",
  },
});

User.belongsTo(Company, {
  foreignKey: {
    name: "companyId",
    field: "companyId",
  },
});

Company.hasMany(Product, { foreignKey: "manufacturerId" });
Product.belongsTo(Company, { foreignKey: "manufacturerId" });

module.exports = {
  sequelize,
  User,
  Company,
  Product,
};
