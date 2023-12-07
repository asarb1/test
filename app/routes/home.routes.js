module.exports = app => {
  const portofoliu = require("../controllers/portofoliu.controller.js");
   var router = require("express").Router();
  router.get("/", portofoliu.findAllPublished);
  app.use('/api/home', router);
};

module.exports = app => {
  const user = require("../controllers/user.controller.js");
   var router = require("express").Router();
  router.post("/", user.create);
  app.use('/api/home', router);
};
