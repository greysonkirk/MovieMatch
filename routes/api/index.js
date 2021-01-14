const router = require("express").Router();
const htmlRoutes = require("./html-routes");

// Book routes
router.use("/html", htmlRoutes);

module.exports = router;
