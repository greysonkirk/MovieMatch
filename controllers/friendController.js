const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createFriend: function (req, res) {
console.log(req.body)
    const newFriend =  ({
      userId: req.user.id,
      partnerId: req.body.partnerId,
      friendUserName: req.body.username,
    }); ({
    
    });
    return db.Friends.create(newFriend) 
  },

  findAll: function (req, res) {
    return db.Friends.findAll({ where: { userId: req.user.id }});
  },
};
