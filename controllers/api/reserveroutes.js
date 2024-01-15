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

// router.put('/api/car/:id', async (req, res) => {
//   try {
//     // Extract the car ID from the request parameters
//     const carId = req.params.id;

//     // Extract the user ID from the request body
//     const { user_id } = req.body;

//     // Check if both car ID and user ID are provided
//     if (!carId || !user_id) {
//       return res.status(400).json({ error: 'Both car ID and user ID are required' });
//     }

//     // Check if the car exists in the database
//     const car = await Car.findByPk(Id);

//     if (!car) {
//       return res.status(404).json({ error: 'Car not found' });
//     }

// Perform the reservation logic
//car.user_id = user_id;
//car.reserved = true;
// Save the changes to the database
//await car.save();

// Send a success response
//return res.status(200).json({ message: 'Car reservation successful', car });
//} catch (error) {
//console.error('Error in car reservation controller:', error);
//return res.status(500).json({ error: 'Internal server error' });
//}
//});

//update user ID and reserve to true
// then car ID to the car ID we created
