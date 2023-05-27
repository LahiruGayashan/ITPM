const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const oderPostSchema = new Schema({
  // organization: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "orgUser",
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  closing_date: {
    type: Date,
  },
  contact_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Oder", oderPostSchema);
