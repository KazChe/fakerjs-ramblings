const { faker } = require('@faker-js/faker');
const { sequelize } = require('../config/database');
const { User } = require('../models');
const { createUserProfile } = require('../utils/faker-helpers');

async function seedInternationalUsers() {
  try {
    const locales = ['en', 'es', 'fr', 'de', 'ja'];

    for (const locale of locales) {
      faker.setLocale(locale);

      const users = Array.from({ length: 100 }, () => ({
        ...createUserProfile(),
        locale: locale
      }));

      await User.bulkCreate(users);
      console.log(`Created 100 users for locale: ${locale}`);
    }
  } catch (error) {
    console.error('Error seeding international users:', error);
    process.exit(1);
  }
}

module.exports = seedInternationalUsers; 