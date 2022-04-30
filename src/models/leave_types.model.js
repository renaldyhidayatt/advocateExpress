const mongoose = require("mongoose");

const LeaveTypeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  leaves: {
    type: Number,
  },
});

const LeaveType = mongoose.model("LeaveType", LeaveTypeSchema);

module.exports = LeaveType;
