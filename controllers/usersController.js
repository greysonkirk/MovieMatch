const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.User.create({ email: req.body.email, password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.User.findOne({ email: req.body.email, password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
