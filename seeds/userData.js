const { User } = require("../models");

const userdata = [
  {
    username: "JohnWatson",
    password: "Password123",
    email: "john@aol.com",
  },
  {
    username: "BlessingOkeme",
    password: "Password123",
    email: "blessing@aol.com",
  },
  {
    username: "SangeethaGnanavel",
    password: "Password123",
    email: "sangeetha@aol.com",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
