const mongoose = require("mongoose");

const schemaTeacher = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('teacher', schemaTeacher);