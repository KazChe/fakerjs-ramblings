const { seedDatabase } = require("./seed-database");
const { seedLargeDataset } = require("./seed-large-dataset");
const { seedInternationalUsers } = require("./seed-international-users");
const faker = require("@faker-js/faker").faker;

async function runAllSeeds() {
  try {
    // set seed for consistent results as shown in your blog
    faker.seed(123);

    console.log("Starting database seeding...");

    //main database seed
    await seedDatabase();

    // for large dataset seed
    await seedLargeDataset();

    // for international users seed
    await seedInternationalUsers();

    console.log("All seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

// whenrunning directly
if (require.main === module) {
  runAllSeeds();
}

module.exports = runAllSeeds;
