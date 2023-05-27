const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  Vehicle_Brand: {
    type: String,
    required: true,
  },
  vehicle_Number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
