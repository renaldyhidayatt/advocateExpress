const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mark_in: {
    type: Date,
  },
  mark_out: {
    type: Date,
  },
  mark_in_notes: {
    type: String,
  },
  mark_out_notes: {
    type: String,
  },
  current_status: {
    type: String,
  },
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = Attendance;
