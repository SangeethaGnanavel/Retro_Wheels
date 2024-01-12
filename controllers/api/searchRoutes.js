const router = require("express").Router();
const { Car} = require("../../models");

//route to display cars based on the selected options from the dropdown
router.get("/", async(req,res) =>{
    try{
      const dbData = await Car.findAll({
        where: {
          type_id: req.body.type_id,
          brand_id: req.body.brand_id,
        },
      })
  
      const data = dbData.map((e) => e.get({ plain: true }));
  
      res.render("all",{
        data,
        loggedIn: req.session.loggedIn,
      })
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;