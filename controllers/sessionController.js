const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
 
    const newSession =  ({
      userId: req.user.id       
    }); ({
    
    });
    return db.Session.create(newSession) 
  },

  findAll: function (req, res) {
    return db.Session.findAll({ where: { userId: req.user.id }});
  },
};
