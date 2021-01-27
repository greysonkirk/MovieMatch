const db = require("../models");
 
module.exports = {
  create: function (req, res) {
    console.log(req.body)
    const newMovies = ({
      userId: req.user.id,
      movieId: req.body.movieId,
      streamer: req.body.streamer,
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      year: req.body.year,
      director: req.body.director,
      star1: req.body.star1,
      star2: req.body.star2,
      star3: req.body.star3
    });({
    
    });
    return db.UserChoice.create(newMovies)
    
     
  },

  findAll: function (req, res) {
   return db.UserChoices.findAll({
      where: { initUser: req.user.id },
    })
      
    
  },
};
