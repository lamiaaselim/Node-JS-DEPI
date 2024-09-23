const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    enum: ["PreKG", "KG1", "KG2"],
  },
  supervisor: { type: Number, ref: "teacher" },
  // Refernce Relation
  child: [{ type: Number, ref: "child" }],
});

//Mapping
module.exports = mongoose.model("class", schema);
