# Faker.js Database Seeding Demo

This project demonstrates how to use [faker.js](https://fakerjs.dev/) to populate a postgres database with realistic test data.

## Introduction

faker.js is a powerful library that helps you generate massive amount of real-life-fake-data for testing and development purposes. When you're building applications, striving for having realistic test data is crucial for proper development and testing.

## Key Features and Benefits

- Generates realistic data across many categories (names, emails, addresses, etc.)
- Supports multiple locales for internationalized data
- Highly customizable and extensible
- Perfect for seeding development databases
- Helps avoid manual data entry for testing

## In this demo will setup the following schema:

![Faker Demo Schema](./assets/faker-demo-schema.png)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start PostgreSQL:
```bash
docker-compose up -d
```

3. Run seeds:
```bash
# Run all seeds
npm run seed

# Run specific seeds
npm run seed:large      # For large dataset
npm run seed:international  # For international users
```

## Advanced Seeding Patterns

### 1. Relationships and Foreign Keys
- Company-Employee relationships with UUID references
- Product-Manufacturer relationships
- Maintains referential integrity across tables

### 2. Custom Generators
- Project status generators
- Sprint number formatting
- Weighted ticket priorities
- Business-specific data patterns

### 3. Batch Processing
- Efficient handling of large datasets
- Progress tracking
- Memory-efficient operations
- Uses `faker.helpers.multiple()` for better performance

### 4. Locale Support
- Multi-language data generation
- Region-specific formatting
- Supports: en, es, fr, de, ja

### 5. Consistent Test Data
- Fixed seeds for reproducible results
- Predictable test scenarios
- Maintains data integrity

## Common Use Cases

- User profiles with related data
- E-commerce product catalogs
- Company data with business logic
- International user data
- Test data generation

## Best Practices

1. **Seed Data Consistency**
   - Use fixed seeds for reproducible results
   - Maintain referential integrity

2. **Performance Considerations**
   - Use batch inserts for large datasets
   - Consider using streams for very large datasets
   - Cache repeated random generations
   - Use `faker.helpers.multiple()` for generating arrays of data

3. **Data Relationships**
   - Maintain proper foreign key relationships
   - Use UUIDs for consistent references
   - Handle nested data structures

## Project Structure

```

```
faker-demo/
├── docker-compose.yml
├── package.json
├── src/
│ ├── config/
│ │ └── database.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Company.js
│ │ └── Product.js
│ ├── seeds/
│ │ ├── seed-users.js
│ │ ├── seed-companies.js
│ │ └── seed-products.js
│ └── utils/
│ └── faker-helpers.js
└── README.md
```

