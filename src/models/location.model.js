const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Location", LocationSchema);
