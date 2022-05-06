const LeaveTypeModel = require("../models/leave_types.model");

module.exports = {
  getAllLeaveTypes: () => {
    return LeaveTypeModel.find();
  },
  getLeaveType: (id) => {
    return LeaveTypeModel.findById(id);
  },
  createLeaveType: (data) => {
    return LeaveTypeModel.create({ ...data });
  },
  updateLeaveType: (id, data) => {
    return LeaveTypeModel.findByIdAndUpdate(id, { $set: { ...data } });
  },
  deleteLeaveType: (id) => {
    return LeaveTypeModel.findByIdAndDelete(id);
  },
};
