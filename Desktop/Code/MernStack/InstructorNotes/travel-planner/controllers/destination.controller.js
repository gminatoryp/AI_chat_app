const Destination = require("../models/destination.model");

// Export an object that is full of methods.
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create method executed.");

    Destination.create(req.body)
      .then((destination) => {
        // Newly created destination from DB that includes DB id.
        res.json(destination);
      })
      .catch((err) => {
        // This makes axios on the front-end react side trigger the .catch.
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed.");

    Destination.find()
      .then((destinations) => {
        res.json(destinations);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    Destination.findById(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Destination.findByIdAndDelete(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Destination.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true, // to return update doc instead of old one.
    })
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // NOT ON EXAM, this was used to receive a JSON array of many destinations.
  createMany(req, res) {
    const promises = req.body.map((dest) => {
      return Destination.create(dest);
    });

    Promise.allSettled(promises).then((results) => {
      res.json(results);
    });
  },
};
