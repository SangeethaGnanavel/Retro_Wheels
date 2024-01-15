const router = require("express").Router();
const { Car } = require("../../models");

//route to display cars based on the selected options from the dropdown
router.get("/", async (req, res) => {
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
    }
    console.log("##########################################");

    const cars = dbcars.map((e) => e.get({ plain: true }));
    res.status(200).json(cars);
    // console.log(cars);
    // res.render("all", {
    //   cars,
    //   loggedIn: req.session.loggedIn,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
