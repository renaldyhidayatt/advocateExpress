const CaseCategoryModel = require("../models/case_categories.model");

module.exports = {
  getAllCaseCategories: async (req, res) => {
    try {
      const caseCategories = await CaseCategoryModel.find();
      res.status(200).json({
        message: "Success",
        data: caseCategories,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getCaseCategory: async (req, res) => {
    try {
      const caseCategory = await CaseCategoryModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createCaseCategory: async (req, res) => {
    try {
      const caseCategory = await CaseCategoryModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  updateCaseCategory: async (req, res) => {
    try {
      const caseCategory = await CaseCategoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  deleteCaseCategory: async (req, res) => {
    try {
      const caseCategory = await CaseCategoryModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
};
