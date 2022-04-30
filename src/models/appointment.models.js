const mongoose = require("mongoose");

const AppointmentModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contant_id: {
    type: String,
  },
  motive: {
    type: String,
    required: true,
  },
  date_time: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Appointment", AppointmentModel);
