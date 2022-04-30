const mongoose = require("mongoose");

const HolidaySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Holiday = mongoose.model("Holiday", HolidaySchema);

module.exports = Holiday;
