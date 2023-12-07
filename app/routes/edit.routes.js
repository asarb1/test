module.exports = app => {
  const imagine = require("../controllers/imagine.controller.js");
   var router = require("express").Router();

  router.post("/:id", imagine.create);
  router.delete("/:id", imagine.delete);
  router.get("/:id", imagine.findOne);
  router.get("/:id", imagine.findAllPublished);
  app.use('/api/edit', router);
};
