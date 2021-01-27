const passport = require("../../config/passport");
const friendController = require("../../controllers/friendController");
const usersController = require("../../controllers/usersController");
const movieController = require("../../controllers/movieController");
var router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
 
 

router.get("/movies", (req, res) => {
  console.log(req.user);
  console.log("should query");
  movieController.findAll(req, res).then((result) => {
    res.json(result);
  });
});
router.get("/findfriends",(req,res) => {
  friendController.findAll(req, res).then((result) => {
    res.json(result);
  });
});

router.get("/start", isAuthenticated, (req, res) => {
  console.log("should redirect");
  res.redirect("start");
});

router.get("/users", isAuthenticated, (req, res) => {
  usersController.findAll().then((result) => {
    res.json(result);
  });
});

router.post("/friend", isAuthenticated, (req, res) => {
  console.log(req.body)
  friendController
    .createFriend(req,res).then((result) => {
      res.json(result);
    }); 
});

router.post("/sendmovies", movieController.create);



router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("login");
  console.log(req.user);
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

router.post("/signup", (req, res) => {
  usersController
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch((err) => res.status(422).json(err));
});
module.exports = router;

router.post("/sendmovies", movieController.create);
module.exports = router;
