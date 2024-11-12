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