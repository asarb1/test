const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  bcrypt.hash(req.body.parola, saltRounds, function(err, hash){
    const user = new User({
      email: req.body.email,
      parola: hash
    });
});

  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
