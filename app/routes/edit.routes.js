module.exports = app => {
  const imagine = require("../controllers/imagine.controller.js");
   var router = require("express").Router();

  router.post("/", imagine.create);
  router.delete("/", imagine.delete);
  router.get("/", imagine.findOne);
  router.get("/", imagine.findAllPublished);
  app.use('/api/edit', router);
};
