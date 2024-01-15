const router = require("express").Router();

const userRoutes = require("./userRoutes");

const searchRoutes = require("./searchRoutes");
const reserveRoutes = require("./reserveroutes");

router.use("/users", userRoutes);

router.use("/search", searchRoutes);
router.use("/reserve", reserveRoutes);

module.exports = router;
