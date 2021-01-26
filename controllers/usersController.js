const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (user) {
   return db.User.create(user)
   
  },
  findOne: function (req, res) {
    db.User.findOne({ email: req.body.email, password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.User.findAll()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
