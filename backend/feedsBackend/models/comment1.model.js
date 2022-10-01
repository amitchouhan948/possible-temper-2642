const mongoose = require("mongoose");

const comment1Schema = new mongoose.Schema({
  id: { type: Number },
  day: { type: String },
  time: { type: String },
  email: { type: String },
  message: { type: String },
});

const Comment1 = mongoose.model("comment1", comment1Schema);
module.exports = Comment1;
