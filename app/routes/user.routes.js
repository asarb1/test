module.exports = app => {
  const imagine = require("../controllers/imagine.controller.js");
   var router = require("express").Router();
  router.get("/", imagine.findAllPublished);
  app.use('/api/user', router);
};
