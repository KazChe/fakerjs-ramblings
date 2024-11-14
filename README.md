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

```sql
CREATE TABLE "Companies" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255),
  "catchPhrase" VARCHAR(255),
  description TEXT,
  industry VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(100),
  website VARCHAR(255),
  headquarters VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Users" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "firstName" VARCHAR(100),
  "lastName" VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  avatar VARCHAR(255),
  "companyId" UUID REFERENCES "Companies"(id),
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Products" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  category VARCHAR(100),
  images JSONB DEFAULT '[]',
  stock INTEGER,
  sku VARCHAR(255) UNIQUE,
  "manufacturerId" UUID REFERENCES "Companies"(id),
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL using Docker:

```bash
docker-compose up -d
```

3. Initialize the database schema:

```bash
npm run init-db
```

4. Run seeds (includes standard, large dataset,international users)

```bash
# run all seeds (includes standard, large dataset, and international users)
npm run seed
```

5. Verify the seeded data:
- Connect to PostgreSQL using your preferred client
- Connection details:
  - Host: localhost
  - Port: 5432
  - Database: faker_demo
  - Username: faker_user
  - Password: faker_password

Note: Make sure you have Docker installed on your system before starting. The database will be automatically configured with the correct user, password, and database name as specified in the docker-compose.yml file.

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

```
