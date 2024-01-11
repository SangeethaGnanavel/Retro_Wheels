const { Type } = require("../models");

const typedata = [
  {
    type_name: "Hatchback",
  },
  {
    type_name: "Sedan",
  },
  {
    type_name: "SUV",
  },
  {
    type_name: "MiniVan",
  },
  {
    type_name: "PicupTruck",
  },
];

const seedType = () => Type.bulkCreate(typedata);

module.exports = seedType;
