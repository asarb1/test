module.exports = app => {
  const imagine = require("../controllers/imagine.controller.js");
   var router = require("express").Router();

  router.post("/edit:id", imagine.create);
  router.delete("edit/:id", imagine.delete);
  router.get("edit/:id", imagine.findOne);

  app.use('/api/imagine', router);
};
