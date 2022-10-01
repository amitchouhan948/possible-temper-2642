const mongoose = require("mongoose");

const comment2Schema = new mongoose.Schema({
  id: { type: Number },
  day: { type: String },
  time: { type: String },
  email: { type: String },
  message: { type: String },
});

const Comment2 = mongoose.model("comment2", comment2Schema);
module.exports = Comment2;
