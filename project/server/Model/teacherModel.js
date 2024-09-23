const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id:Number,  
    userName:{type:String, required:true},
    email:{type: String, unique: true},
    password:String,
    image:String,
})

//Mapping
module.exports = mongoose.model("teacher", schema) 
