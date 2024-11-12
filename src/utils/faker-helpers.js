// provides helper functions for generating fake data using faker.js.
// it has custom generators for project-specific data like status and priorities,
//functions to create realistic user profiles, companies with employees,product data

const { faker } = require("@faker-js/faker");

const customGenerator = {
  projectStatus() {
    return faker.helpers.arrayElement([
      "PLANNING",
      "IN_PROGRESS",
      "REVIEW",
      "COMPLETED",
    ]);
  },
  sprintNumber() {
    return `SP-${faker.number.int({ min: 1, max: 999 })}`;
  },
  ticketPriority() {
    return faker.helpers.weightedArrayElement([
      { weight: 0.1, value: "CRITICAL" },
      { weight: 0.2, value: "HIGH" },
      { weight: 0.4, value: "MEDIUM" },
      { weight: 0.3, value: "LOW" },
    ]);
  },
};

const createUserProfile = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName }),
    avatar: faker.image.avatar(),
    job: {
      title: faker.person.jobTitle(),
      area: faker.person.jobArea(),
      type: faker.person.jobType(),
      descriptor: faker.person.jobDescriptor(),
    },
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      coordinates: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
    },
    internet: {
      username: faker.internet.userName({ firstName, lastName }),
      password: faker.internet.password(),
      userAgent: faker.internet.userAgent(),
    },
  };
};

const createCompanyWithEmployees = () => {
  const companyId = faker.string.uuid();

  const company = {
    id: companyId,
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    description: `${faker.company.buzzPhrase()} ${faker.company.buzzVerb()} ${faker.company.buzzAdjective()}`,
    contacts: {
      email: faker.internet.email(),
      phone: faker.phone.number(),
      website: faker.internet.url(),
    },
    address: {
      headquarters: faker.location.streetAddress(true),
      coordinates: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
    },
  };

  const employees = Array.from(
    { length: faker.number.int({ min: 5, max: 20 }) },
    () => ({
      id: faker.string.uuid(),
      companyId: companyId,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      role: faker.person.jobTitle(),
      department: faker.commerce.department(),
      salary: faker.number.int({ min: 30000, max: 150000 }),
    })
  );

  return { company, employees };
};

const createProduct = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  category: faker.commerce.department(),
  images: Array.from({ length: 3 }, () => ({
    url: faker.image.url(),
    alt: faker.lorem.sentence(),
    isPrimary: faker.datatype.boolean(),
  })),
  metadata: {
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 0, max: 1000 }),
    sku: faker.string.alphanumeric(8).toUpperCase(),
  },
});

module.exports = {
  customGenerator,
  createUserProfile,
  createCompanyWithEmployees,
  createProduct,
};
