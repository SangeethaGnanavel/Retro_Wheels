const sequelize = require("../config/connection");
const seedBrand = require("./brandData");
const seedType = require("./typeData");
const seedUser = require("./userData");
const seedCar = require("./carData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBrand();
  await seedType();
  await seedUser();
  await seedCar();

  process.exit(0);
};

seedAll();
