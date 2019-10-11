var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
      res.render("index", {burgers: dbBurger});
    });
  });

  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      console.log(dbBurger);
      res.json(dbBurger);
    })
  })

  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update(
      req.body, {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
        res.json(dbBurger);
      })
  })
}