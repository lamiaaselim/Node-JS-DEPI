const mongoose = require("mongoose");

// Define the address schema
const addressSchema = new mongoose.Schema(
  {
    city: { type: String },
    street: { type: String },
    building: { type: Number },
  },
  { _id: false }
);

// Export the address schema
module.exports = addressSchema;
