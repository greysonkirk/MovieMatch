
const passport = require("../../config/passport");
const usersController = require("../../controllers/usersController");
const movieController = require("../../controllers/movieController");
var router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");

router.get("/movies", isAuthenticated, (req, res) => {
  console.log("should redirect");
  res.redirect("movies");
});


router.post("/login", passport.authenticate("local"), (req, res) => {
console.log("login")
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});


router.post("/signup", usersController.create);
module.exports = router;


router.post("/sendmovies", movieController.create);
module.exports = router;
