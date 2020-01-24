const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protocolSchema = new Schema({
  category: {
    type: String,
    enum: ["cardiac", "general", "medical", "trauma", "administrative"],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  district: {
    type: [String],
    default: "lehi",
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Protocol", protocolSchema);
