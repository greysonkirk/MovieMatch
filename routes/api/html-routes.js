

const passport = require("../../config/passport");
 
var router = require("express").Router();
const isAuthenticated = require('../../config/isAuthenticated');

  router.get('/movies', isAuthenticated, (req, res) => {
    console.log("should redirect")
    res.render('movies')
  })

 