const HolidayModel = require("../models/holiday.model");

module.exports = {
  getAllHolidays: async (req, res) => {
    try {
      const holidays = await HolidayModel.find();
      res.status(200).json({
        message: "Success",
        data: holidays,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getHoliday: async (req, res) => {
    try {
      const holiday = await HolidayModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: holiday,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getHolidayMonth: async (req, res) => {
    try {
      const holiday = await HolidayModel.find({ month: req.params.month });
      res.status(200).json({
        message: "Success",
        data: holiday,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createHoliday: async (req, res) => {
    try {
      const holiday = await HolidayModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: holiday,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateHoliday: async (req, res) => {
    try {
      const holiday = await HolidayModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Success",
        data: holiday,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteHoliday: async (req, res) => {
    try {
      const holiday = await HolidayModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: holiday,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
