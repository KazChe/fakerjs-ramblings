const { faker } = require("@faker-js/faker");
const { sequelize } = require("../config/database");
const { Company, User, Product } = require("../models");
const {
  createCompany,
  createUserProfile,
  createProduct,
} = require("../utils/faker-helpers");

async function seedDatabase() {
  try {
    // ensure consistent data with seed
    faker.seed(123);

    await sequelize.transaction(async (transaction) => {
      // create companies first
      const companies = Array.from({ length: 10 }, createCompany);
      const createdCompanies = await Company.bulkCreate(companies, {
        transaction,
      });

      // create users with company relationships
      const users = createdCompanies.flatMap((company) =>
        Array.from({ length: faker.number.int({ min: 5, max: 20 }) }, () => ({
          ...createUserProfile(),
          companyId: company.id,
        }))
      );
      await User.bulkCreate(users, { transaction });

      //create products with company relationships
      const products = createdCompanies.flatMap((company) =>
        Array.from({ length: faker.number.int({ min: 10, max: 50 }) }, () => ({
          ...createProduct(),
          manufacturerId: company.id,
        }))
      );
      await Product.bulkCreate(products, { transaction });

      console.log(`Seeded:
        - ${companies.length} companies
        - ${users.length} users
        - ${products.length} products`);
    });
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

// for exec directly
if (require.main === module) {
  seedDatabase().then(() => process.exit());
}

module.exports = seedDatabase;
