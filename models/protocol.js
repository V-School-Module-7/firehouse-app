const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protocolSchema = new Schema({
  category: {
    type: String,
    enum: ["cardiac", 'general', 'medical', 'trauma']
    required: true
  },
  title: {
    type: String,
    required: true
  },
  distric: {
    type: [String],
    required: true
  }
  fileUrl: {
    type: String,
    required: true
  }


});

module.exports = mongoose.model("Protocol", protocolSchema);
