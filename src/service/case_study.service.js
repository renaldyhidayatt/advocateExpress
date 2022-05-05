const CaseStudyModel = require("../models/case_study.model");

module.exports = {
  getAllCaseStudy: async (req, res) => {
    try {
      const caseStudies = await CaseStudyModel.find();
      res.status(200).json({
        message: "Success",
        data: caseStudies,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getCaseStudy: async (req, res) => {
    try {
      const caseStudy = await CaseStudyModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createCaseStudy: async (req, res) => {
    try {
      const caseStudy = await CaseStudyModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateCaseStudy: async (req, res) => {
    try {
      const caseStudy = await CaseStudyModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteCaseStudy: async (req, res) => {
    try {
      const caseStudy = await CaseStudyModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
