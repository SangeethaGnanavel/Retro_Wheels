const router = require("express").Router();
const { Car } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("landing");
});

router.get("/all", async (req, res) => {
  try {
    const dbcarData = await Car.findAll();

    const cars = dbcarData.map((car) => car.get({ plain: true }));
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("all", {
      cars,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
