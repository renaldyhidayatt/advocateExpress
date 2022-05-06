const CourtCategoryModel = require("../models/court_categories.model");

module.exports = {
  getAllCourtCategories: async (req, res) => {
    try {
      const courtCategories = await CourtCategoryModel.find();
      res.status(200).json({
        message: "Success",
        data: courtCategories,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getCourtCategory: async (req, res) => {
    try {
      const courtCategory = await CourtCategoryModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: courtCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createCourtCategory: async (req, res) => {
    try {
      const courtCategory = await CourtCategoryModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: courtCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateCourtCategory: async (req, res) => {
    try {
      const courtCategory = await CourtCategoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        data: courtCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteCourtCategory: async (req, res) => {
    try {
      const courtCategory = await CourtCategoryModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({
        message: "Success",
        data: courtCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
