module.exports = app => {
  const portofoliu = require("../controllers/portofoliu.controller.js");
   var router = require("express").Router();

  router.post("/admin", portofoliu.create);
  router.delete("admin", portofoliu.delete);
  router.get("admin", portofoliu.findOne);
  router.get("/admin", portofoliu.findAllPublished);
  router.get("/home", portofoliu.findAllPublished);
  app.use('/api/portofoliu', router);
};
