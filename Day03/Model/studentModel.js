const mongoose = require("mongoose");

// const addressSchema=new mongoose.Schema({/**address */},{_id:false})
// search =>    objectId datatypes inside mongoose , what is the default action for additional propeties

const schema = new mongoose.Schema({
  _id: Number,
  userName: { type: String, required: true }, //,unique:true,default:"value"},
  // password:String,
  // department: Number,
  department:{type:Number,ref:"departments"}
});


//mapping
module.exports = mongoose.model("students", schema);
