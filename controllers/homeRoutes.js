const router = require("express").Router();
const { Car, Type, Brand } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("landing");
});

router.get("/all", async (req, res) => {
  try {
    const dbcarData = await Car.findAll({
      where: {
        reserved: false,
      },
    });
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
router.get("/car/:id", async (req, res) => {
  console.log("ID" & req.params.id);
  try {
    const dbCarData = await Car.findByPk(req.params.id);

    const car = dbCarData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("reserve", {
      car,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/search", async (req, res) => {
  var dbcars;
  try {
    if (!req.query.brand_id == 0 && !req.query.type_id == 0) {
      dbcars = await Car.findAll({
        where: {
          brand_id: req.query.brand_id,
          type_id: req.query.type_id,
          reserved: false,
        },
      });
    } else if (req.query.brand_id === 0 && !req.query.type_id == 0) {
      dbcars = await Car.findAll({
        where: {
          type_id: req.query.type_id,
          reserved: false,
        },
      });
    } else if (!req.query.brand_id == 0 && req.query.type_id === 0) {
      console.log("##########################################");
      dbcars = await Car.findAll({
        where: {
          brand_id: req.query.brand_id,
          reserved: false,
        },
      });
    }
    const cars = dbcars.map((e) => e.get({ plain: true }));
    console.log(cars);
    const dbTypeData = await Type.findAll();
    const types = dbTypeData.map((type) => type.get({ plain: true }));

    const dbBrandData = await Brand.findAll();
    const brands = dbBrandData.map((brand) => brand.get({ plain: true }));

    res.render("all", {
      cars,
      types,
      brands,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/")
module.exports = router;
