const { sequelize } = require('../config/database');
const fs = require('fs').promises;
const path = require('path');

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    //drop existing tables in reverse order (because of foreign key constraints)
    await sequelize.query('DROP TABLE IF EXISTS "Products" CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS "Users" CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS "Companies" CASCADE');

    // eead and  execute schema.sql
    const schemaPath = path.join(__dirname, '../config/schema.sql');
    const schemaSql = await fs.readFile(schemaPath, 'utf8');
    await sequelize.query(schemaSql);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

initializeDatabase();
