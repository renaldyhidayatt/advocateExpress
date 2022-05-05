const LeaveTypeModel = require("../models/leave_types.model");

module.exports = {
  getAllLeaveTypes: async (req, res) => {
    try {
      const leaveTypes = await LeaveTypeModel.find();
      res.status(200).json({
        message: "Success",
        data: leaveTypes,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getLeaveType: async (req, res) => {
    try {
      const leaveType = await LeaveTypeModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: leaveType,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createLeaveType: async (req, res) => {
    try {
      const leaveType = await LeaveTypeModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: leaveType,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateLeaveType: async (req, res) => {
    try {
      const leaveType = await LeaveTypeModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Success",
        data: leaveType,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteLeaveType: async (req, res) => {
    try {
      const leaveType = await LeaveTypeModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: leaveType,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
