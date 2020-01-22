const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protocolSchema = new Schema({
  category: {
    type Schema.Types.ObjectId,
    ref: "ProtocolCategory",
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Protocol", protocolSchema);
