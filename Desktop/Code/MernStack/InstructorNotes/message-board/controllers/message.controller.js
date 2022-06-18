const Message = require("../models/message.model");

// Export an object that is full of methods.
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create method executed.");

    Message.create(req.body)
      .then((message) => {
        // Newly created message from DB that includes DB id.
        res.json(message);
      })
      .catch((err) => {
        // This makes axios on the front-end react side trigger the .catch.
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method executed.");

    Message.find()
      .then((messages) => {
        res.json(messages);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    Message.findById(req.params.id)
      .then((message) => {
        res.json(message);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Message.findByIdAndDelete(req.params.id)
      .then((message) => {
        res.json(message);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Message.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true, // to return update doc instead of old one.
    })
      .then((message) => {
        res.json(message);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
