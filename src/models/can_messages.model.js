const mongoose = require("mongoose");

const CanMessageSchema = new mongoose.Schema({
  deletable: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  subject: {
    type: String,
  },
  content: {
    type: String,
  },
});

const CanMessage = mongoose.model("CanMessage", CanMessageSchema);

module.exports = CanMessage;
