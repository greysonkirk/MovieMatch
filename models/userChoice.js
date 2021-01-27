// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const UserChoice = sequelize.define("UserChoice", {
    // The email cannot be null, and must be a proper email before creation
    userId: {
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
  return UserChoice;
};
