const CourtModel = require("../models/court.model");

module.exports = {
  getAllCourts: async (req, res) => {
    try {
      const courts = await CourtModel.find();
      res.status(200).json({
        message: "Success",
        data: courts,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getCourt: async (req, res) => {
    try {
      const court = await CourtModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: court,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createCourt: async (req, res) => {
    try {
      const court = await CourtModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: court,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateCourt: async (req, res) => {
    try {
      const court = await CourtModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        data: court,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteCourt: async (req, res) => {
    try {
      const court = await CourtModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: court,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
