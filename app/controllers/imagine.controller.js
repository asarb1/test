const db = require("../models");
const Imagine = db.imagine;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.src) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const imagine = new Imagine({
src: req.body.src,
alt: req.body.alt
});


  imagine
    .save(imagine)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Image."
      });
    });

};

exports.delete = (req, res) => {
  const id = req.params.id;

  Imagine.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Image with id=${id}. Maybe Image was not found!`
        });
      } else {
        res.send({
          message: "Image was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Image with id=" + id
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Imagine.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Imagine with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Imagine with id=" + id });
    });
};

exports.findAllPublished = (req, res) => {
  Imagine.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving images."
      });
    });
};
