const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (user) {
    return db.User.create(user);
  },
  createFriend: function (user) {
    return db.Friend.create(user);
  },
  findOne: function (req, res) {
   return db.User.findOne({ email: req.body.email, password: req.body.password })
  
  },
  findAll: function () {
  return  db.User.findAll({ attributes: { exclude: ["password"] } })
      
  },
};
