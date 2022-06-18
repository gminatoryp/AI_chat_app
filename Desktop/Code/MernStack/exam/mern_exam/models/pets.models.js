const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    breed: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    color: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);

