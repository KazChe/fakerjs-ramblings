const { faker } = require("@faker-js/faker");
const { sequelize } = require("../config/database");
const { Company } = require("../models");
const { createUserProfile } = require("../utils/faker-helpers");

async function seedLargeDataset(batchSize = 1000) {
  try {
    const totalRecords = 1000000; // 1 million records
    const batches = Math.ceil(totalRecords / batchSize);

    console.log(`Seeding ${totalRecords} records in ${batches} batches`);

    for (let i = 0; i < batches; i++) {
      const records = faker.helpers.multiple(createUserProfile, {
        count: Math.min(batchSize, totalRecords - i * batchSize),
      });

      await Company.bulkCreate(records);
      console.log(`Completed batch ${i + 1}/${batches}`);
    }
  } catch (error) {
    console.error("Error seeding large dataset:", error);
    process.exit(1);
  }
}

module.exports = seedLargeDataset;
