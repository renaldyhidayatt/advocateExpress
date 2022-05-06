const {
  getAllCaseCategories,
  getCaseCategory,
  createCaseCategory,
  updateCaseCategory,
  deleteCaseCategory,
} = require("../services/case_category.service");

class CaseCategoryController {
  async getAllCaseCategories(req, res) {
    try {
      const caseCategories = await getAllCaseCategories();
      res.status(200).json({
        message: "Success",
        data: caseCategories,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getCaseCategory(req, res) {
    try {
      const caseCategory = await getCaseCategory(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createCaseCategory(req, res) {
    try {
      const body = {
        name: req.body.name,
      };
      const caseCategory = await createCaseCategory(body);
      res.status(201).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateCaseCategory(req, res) {
    try {
      const caseCategory = await updateCaseCategory(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteCaseCategory(req, res) {
    try {
      const caseCategory = await deleteCaseCategory(req.params.id);
      res.status(200).json({
        message: "Success",
        data: caseCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new CaseCategoryController();
