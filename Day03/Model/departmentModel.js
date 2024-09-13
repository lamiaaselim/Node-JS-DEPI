const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id:Number,
    name:{
        type: String,
        required: true
      }
})



//mapping
module.exports=mongoose.model("departments",schema);