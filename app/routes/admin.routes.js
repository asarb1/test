module.exports = app => {
  const portofoliu = require("../controllers/portofoliu.controller.js");
   var router = require("express").Router();

  router.post("/", portofoliu.create);
  router.delete("/", portofoliu.delete);
  router.get("/", portofoliu.findOne);
  router.get("/", portofoliu.findAllPublished);
  app.use('/api/admin', router);
};
