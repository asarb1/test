module.exports = app => {
  const user = require("../controllers/user.controller.js");
   var router = require("express").Router();

  router.post("/home", user.create);

  app.use('/api/user', router);
};
