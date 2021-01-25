
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
var router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");

router.get("/movies", isAuthenticated, (req, res) => {
  console.log("should redirect");
  res.redirect("movies");
});


router.post("/login", passport.authenticate("local"), usersController.findOne, (req, res) => {
console.log("login")
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});


router.post("/signup", usersController.create);
module.exports = router;
