const {
  getCases,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
  casesByDate,
  restoreCase,
  updateSetIsStarted,
  getCasesCourtId,
} = require("../services/cases.service");

class CasesController {
  async getCases(req, res) {
    try {
      const cases = await getCases();
      return res.status(200).json({
        message: "Success",
        data: cases,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getCaseById(req, res) {
    try {
      const caseById = await getCaseById(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: caseById,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createCase(req, res) {
    try {
      const create = await createCase(req.body);
      return res.status(201).json({
        message: "Success",
        data: create,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateCase(req, res) {
    try {
      const update = await updateCase(req.params.id, req.body);
      return res.status(200).json({
        message: "Success",
        data: update,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteCase(req, res) {
    try {
      const deletet = await deleteCase(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: deletet,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async casesByDate(req, res) {
    try {
      const data = await casesByDate(req.params.date);
      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async restoreCase(req, res) {
    try {
      const data = await restoreCase(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateSetIsStarted(req, res) {
    try {
      const data = await updateSetIsStarted(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getCasesCourtId(req, res) {
    try {
      const data = await getCasesCourtId(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new CasesController();
