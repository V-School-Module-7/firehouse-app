const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protocolCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ProtocolCategory", protocolCategorySchema);
