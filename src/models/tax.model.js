const mongoose = require("mongoose");

const TaxModel = new mongoose.Schema({
  name: {
    type: String,
  },
  percent: {
    type: Number,
  },
});

module.exports = mongoose.model("Tax", TaxModel);
