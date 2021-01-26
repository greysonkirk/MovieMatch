const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.Movies.create({
      initUserID: req.body.userID,
      movieID: req.body.imbdID,
      streamer: req.body.streamer,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      year: req.body.year,
      director: req.body.director,
      star1: req.body.star1,
      star2: req.body.star2,
      star3: req.body.star3
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
