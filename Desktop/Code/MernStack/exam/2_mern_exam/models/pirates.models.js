const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    src: {
        type: String,
        required: [true, "{PATH} is required."],
    },

    position: {
        type: String,
        required: [true, "{PATH} is required."],
    },

    chest: {
        type: String,
        required: [true, "{PATH} is required."],
    },

    phrase: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    
      // Checkboxes 
    pegLeg: {
        type: Boolean,
        default: true,
    },
    eyePatch: {
        type: Boolean,
        default: true,
    },
    hookHand: {
        type: Boolean,
        default: true,
    },

}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

