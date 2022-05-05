const CaseStageModel = require("../models/case_stages.model");

module.exports = {
  getAllCaseStage: async (req, res) => {
    try {
      const caseStages = await CaseStageModel.find();
      res.status(200).json({
        message: "Success",
        data: caseStages,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getCaseStage: async (req, res) => {
    try {
      const caseStage = await CaseStageModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createCaseStage: async (req, res) => {
    try {
      const caseStage = await CaseStageModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  updateCaseStage: async (req, res) => {
    try {
      const caseStage = await CaseStageModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  deleteCaseStage: async (req, res) => {
    try {
      const caseStage = await CaseStageModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
};
