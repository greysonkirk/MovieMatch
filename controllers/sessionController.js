const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    console.log(req.body)
    const newSession = {
      userId: req.user.id,
      partnerId: req.body.partnerId,
      friendUserName: req.body.username,
    };
    ({});
    return db.Session.create(newSession);
  },

  findAll: function (req, res) {
    console.log(req.body);
    return db.Session.findAll({
      where: { [Op.or]: [{ userId: req.user.id }, { partnerId: req.user.id }] },
    });
  },
};
