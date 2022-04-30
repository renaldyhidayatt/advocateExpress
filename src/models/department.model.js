const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
