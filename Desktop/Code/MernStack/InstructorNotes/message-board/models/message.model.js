const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    content: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
    },
    primaryCategory: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    secondaryCategory: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
