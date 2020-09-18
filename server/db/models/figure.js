const mongoose = require("mongoose"),
  Position = require("./position"),
  Transition = require("./transition");

const figureSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  number: {
    type: String,
  },
  difficulty: {
    type: String,
  },
  category: {
    type: String,
  },
  variations: {
    type: String,
  },
  positions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Position" }],
  transitions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transition" }],
});

const Figure = mongoose.model("Figure", figureSchema);
module.exports = Figure;
