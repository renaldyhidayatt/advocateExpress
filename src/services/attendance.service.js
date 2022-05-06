const AttendanceModel = require("../models/attendance.model");

module.exports = {
  getAttendances: async (req, res) => {
    try {
      const attendance = await AttendanceModel.find();
      res.status(200).json({
        message: "Success",
        data: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getAttendanceByUser: async (req, res) => {
    try {
      const attendance = await AttendanceModel.find({ user: req.params.id });
      res.status(200).json({
        message: "Success",
        data: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getAttendance: async (req, res) => {
    try {
      const attendance = await AttendanceModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error ${err}`,
      });
    }
  },
  //   getAttendanceByDate: async (req, res) => {
  //     try {
  //       const attendance = await AttendanceModel.find({ date: req.params.date });
  //       res.status(200).json({
  //         message: "Success",
  //         data: attendance,
  //       });
  //     } catch (err) {
  //       res.status(500).json({
  //         message: "Error",
  //       });
  //     }
  //   },
  attendanceToday: async (req, res) => {
    try {
      const attendance = await AttendanceModel.find({
        mark_in: req.params.date,
        user_id: req.params.id,
      });
      res.status(200).json({
        message: "Success",
        data: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createAttendance: async (req, res) => {
    try {
      const attendance = await AttendanceModel.create(req.body);
      res.status(201).json({
        message: "Success",
        attendance: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  updateAttendance: async (req, res) => {
    try {
      const attendance = await AttendanceModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Success",
        data: attendance,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
};
