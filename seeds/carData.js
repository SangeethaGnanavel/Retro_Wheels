const { Car } = require("../models");

const cardata = [
  {
    name: "Acura_SX",
    type_id: 3,
    brand_id: 6,
    price: 40000,
    colour: "Red",
    reserved: false,
    user_id: null,
    kilometers: 10000,
    manufacture_year: 2020,
    filename: "Acura_SUV_Red.jpg",
  },
  {
    name: "Audi_Sx",
    type_id: 2,
    brand_id: 1,
    price: 30000,
    colour: "Black",
    reserved: false,
    user_id: null,
    kilometers: 12000,
    manufacture_year: 2019,
    filename: "Audi_Sedan_Black.jpg",
  },
  {
    name: "Audi_SUV",
    type_id: 3,
    brand_id: 1,
    price: 30000,
    colour: "Black",
    reserved: false,
    user_id: null,
    kilometers: 10000,
    manufacture_year: 2021,
    filename: "Audi_Suv_Black.jpg",
  },
  {
    name: "Benz_SX",
    type_id: 2,
    brand_id: 2,
    price: 40000,
    colour: "White",
    reserved: false,
    user_id: null,
    kilometers: 14000,
    manufacture_year: 2022,
    filename: "Benz_Sedan_White.jpg",
  },
  {
    name: "BMW_SUV",
    type_id: 3,
    brand_id: 3,
    price: 36000,
    colour: "Blue",
    reserved: false,
    user_id: null,
    kilometers: 10500,
    manufacture_year: 2022,
    filename: "BMW_SUV_Blue.jpg",
  },
  {
    name: "Cadillac_SUV",
    type_id: 3,
    brand_id: 5,
    price: 32000,
    colour: "Grey",
    reserved: false,
    user_id: null,
    kilometers: 16000,
    manufacture_year: 2018,
    filename: "Cadillac_SUV_Grey.jpg",
  },
  {
    name: "Ford_Escape",
    type_id: 3,
    brand_id: 7,
    price: 25000,
    colour: "Green",
    reserved: false,
    user_id: null,
    kilometers: 200000,
    manufacture_year: 2018,
    filename: "Ford_Suv_green.jpg",
  },
  {
    name: "Subaru_SUV",
    type_id: 3,
    brand_id: 15,
    price: 25000,
    colour: "Red",
    reserved: false,
    user_id: null,
    kilometers: 200000,
    manufacture_year: 2019,
    filename: "Subaru_SUV_Red.png",
  },
];

const seedCar = () => Car.bulkCreate(cardata);

module.exports = seedCar;
