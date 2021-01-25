/* eslint-disable indent */
// Requiring our models and passport as we've configured it

const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
var router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");

router.get("/movies", isAuthenticated, (req, res) => {
  console.log("should redirect");
  res.redirect("movies");
});
// const sequelize = require('sequelize')

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", usersController.create);
module.exports = router;
