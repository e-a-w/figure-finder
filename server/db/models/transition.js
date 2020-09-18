const mongoose = require("mongoose"),
  Position = require("./position");

const transitionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  positions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Position" }],
});

const Transition = mongoose.model("Transition", transitionSchema);
module.exports = Transition;
