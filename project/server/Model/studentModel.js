const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: Number,
  userName: { type: String, required: true },
  email: String,
  password: String,
  // Refernce Relation
  department: { type: Number, ref: "department" },
});

module.exports = mongoose.model("students", schema);
