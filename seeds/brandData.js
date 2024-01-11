const { Brand } = require("../models");

const branddata = [
  {
    brand_name: "Audi",
  },
  {
    brand_name: "MercedesBenz",
  },
  {
    brand_name: "BMW",
  },
  {
    brand_name: "Lexus",
  },
  {
    brand_name: "Cadillac",
  },
  {
    brand_name: "Acura",
  },
  {
    brand_name: "Ford",
  },
  {
    brand_name: "Honda",
  },
  {
    brand_name: "Nissan",
  },
  {
    brand_name: "Mazda",
  },
  {
    brand_name: "Toyota",
  },
  {
    brand_name: "Volkswagen",
  },
  {
    brand_name: "Kia",
  },
  {
    brand_name: "Hyundai",
  },
  {
    brand_name: "Subaru",
  },
  {
    brand_name: "Chevrolet",
  },
  {
    brand_name: "GMC",
  },
];

const seedBrand = () => Brand.bulkCreate(branddata);

module.exports = seedBrand;
