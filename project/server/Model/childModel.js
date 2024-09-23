const mongoose = require("mongoose");

const addressSchema = require("./adressSchema");

const schema = new mongoose.Schema({
  _id: Number,
  username: { type: String, required: true },
  age: Number,
  level: {
    type: String,
    enum: ["PreKG", "KG1", "KG2"],
  },
  address: addressSchema,
});

//Mapping
module.exports = mongoose.model("child", schema); // child => is collection name
