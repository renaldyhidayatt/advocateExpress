const {
  getCaseStages,
  getCaseStage,
  createCaseStage,
  updateCaseStage,
  deleteCaseStage,
} = require("../services/case_stage.service");

class CaseStageController {
  async getCaseStages(req, res) {
    try {
      const caseStages = await getCaseStages();
      res.status(200).json({
        message: "Success",
        data: caseStages,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getCaseStage(req, res) {
    try {
      const caseStage = await getCaseStage(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createCaseStage(req, res) {
    try {
      const body = {
        name: req.body.name,
      };
      const caseStage = await createCaseStage(body);
      res.status(201).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateCaseStage(req, res) {
    try {
      const caseStage = await updateCaseStage(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteCaseStage(req, res) {
    try {
      const caseStage = await deleteCaseStage(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStage,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new CaseStageController();
