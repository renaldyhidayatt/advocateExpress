const {
  getAllCaseStudy,
  getCaseStudy,
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
} = require("../services/case_study.service");

class CaseStudyController {
  async getAllCaseStudy(req, res) {
    try {
      const caseStudies = await getAllCaseStudy();
      res.status(200).json({
        message: "Success",
        data: caseStudies,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getCaseStudy(req, res) {
    try {
      const caseStudy = await getCaseStudy(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createCaseStudy(req, res) {
    try {
      const body = {
        title: req.body.title,
        case_category: req.body.case_category,
        notes: req.body.notes,
        result: req.body.result,
      };
      const caseStudy = await createCaseStudy(body);
      res.status(201).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateCaseStudy(req, res) {
    try {
      const caseStudy = await updateCaseStudy(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteCaseStudy(req, res) {
    try {
      const caseStudy = await deleteCaseStudy(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}
module.exports = new CaseStudyController();
