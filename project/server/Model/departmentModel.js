const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    // construct
    _id:Number,
    name:String,
    location:String,
    // Refernce Relation
})



module.exports = mongoose.model("department", schema) 