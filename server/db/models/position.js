const mongoose = require("mongoose"),
  Figure = require("./figure");

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  figure: { type: String },
});

const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
