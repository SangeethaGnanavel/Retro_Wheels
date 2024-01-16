const router = require("express").Router();
const { Car } = require("../../models"); // Adjust the path accordingly

router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const carUpdate = await Car.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (carUpdate[0] === 0) {
      res.status(404).json({ message: "No car with this ID or not reserved" });
      return;
    }

    // Save the changes to the database
    const car = await Car.findByPk(req.params.id);
    await car.save();

    res.status(200).json(carUpdate); // Sending the updated car data
  } catch (err) {
    console.error("Error in updating car", err);
    res.status(500).json(err);
  }
});

module.exports = router;
