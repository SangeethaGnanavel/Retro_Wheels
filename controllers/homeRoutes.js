const router = require("express").Router();
const { Car, Type, Brand } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("landing");
});

router.get("/all", async (req, res) => {
  try {
    const dbcarData = await Car.findAll();
    const cars = dbcarData.map((car) => car.get({ plain: true }));

    const dbTypeData = await Type.findAll();
    const types = dbTypeData.map((type) => type.get({ plain: true }));

    const dbBrandData = await Brand.findAll();
    const brands = dbBrandData.map((brand) => brand.get({ plain: true }));
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("all", {
      cars,
      types,
      brands,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/")
module.exports = router;
