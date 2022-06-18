const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
    },
    src: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    srcType: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    // Checkboxes for seasons that you want to travel to this destination during.
    summer: {
      type: Boolean,
      default: false,
    },
    winter: {
      type: Boolean,
      default: false,
    },
    spring: {
      type: Boolean,
      default: false,
    },
    fall: {
      type: Boolean,
      default: false,
    },
    // population: {
    //   type: Number,
    //   required: [true, "{PATH} is required."],
    //   min: [0, "{PATH} must be {MIN} at minimum."],
    // },
  },
  { timestamps: true }
);

const Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;
