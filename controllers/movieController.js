const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    const newMovies = req.body.map((movie) => ({
      initUser: req.user.id,
      movieId: movie.imdbID,
      streamer: Object.keys(movie.streamingInfo)[0],
      title: movie.title,
      desc: movie.overview,
      img: movie.posterURLs["500"],
      year: movie.year,
      director: movie.significants[0],
      star1: movie.cast[0],
      star2: movie.cast[1],
      star3: movie.cast[2],
    }));
    db.Movie.bulkCreate(newMovies, {
      fields: [
        "initUser",
        "movieId",
        "streamer",
        "title",
        "desc",
        "img",
        "year",
        "director",
        "star1",
        "star2",
        "star3",
      ],
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err), res.status(422).json(err);
      });
  },

  findAll: function (req, res) {
   return db.Movie.findAll({
      where: { initUser: req.user.id },
    })
      
    
  },
};
