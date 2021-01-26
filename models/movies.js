module.exports = function (sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    initUser: {
      type: DataTypes.INTEGER,
    },
    movieId: {
      type: DataTypes.STRING,
    },
    streamer: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    star1: {
      type: DataTypes.STRING,
    },
    star2: {
      type: DataTypes.STRING,
    },
    star3: {
      type: DataTypes.STRING,
    },
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return Movie;
};
