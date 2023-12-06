const db = require("../models");
const Portofoliu = db.portofoliu;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.titlu) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const portofoliu = new Portofoliu({
    imagine: req.body.imagine,
    titlu: req.body.titlu,
    descriere: req.body.descriere,
    link: req.body.link
  });

  // Save Tutorial in the database
  portofoliu
    .save(portofoliu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Portofolio."
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Portofoliu.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Portofolio with id=${id}. Maybe Portofolio was not found!`
        });
      } else {
        res.send({
          message: "Portofolio was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Portofolio with id=" + id
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Portofoliu.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Portofoliu with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Portofoliu with id=" + id });
    });
};
