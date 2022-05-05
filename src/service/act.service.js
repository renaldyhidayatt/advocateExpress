const ActModel = require("../models/act.model");

module.exports = {
  getActs: async (req, res) => {
    try {
      const acts = await ActModel.find();
      res.status(200).json({
        message: "Success",
        data: acts,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getAct: async (req, res) => {
    try {
      const act = await ActModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        act: act,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createAct: async (req, res) => {
    try {
      const act = await ActModel.create(req.body);
      res.status(201).json({
        message: "Success",
        act: act,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  updateAct: async (req, res) => {
    try {
      const act = await ActModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Success",
        act: act,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  deleteAct: async (req, res) => {
    try {
      const act = await ActModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        act: act,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
};
