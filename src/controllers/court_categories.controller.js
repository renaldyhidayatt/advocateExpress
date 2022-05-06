const {
  getAllCourtCategories,
  getCourtCategory,
  createCourtCategory,
  deleteCourtCategory,
  updateCourtCategory,
} = require("../services/court_categories.service");

class CourtCategoriesController {
  async getAllCourtCategories(req, res) {
    const courtCategories = getAllCourtCategories();
    return res.json({
      status: "success",
      data: courtCategories,
    });
  }
  async getCourtCategory(req, res) {
    const courtCategory = getCourtCategory(req.params.id);
    if (!courtCategory) return res.status(400).send("CourtCategory not found");
    return res.json({
      status: "success",
      data: courtCategory,
    });
  }
  async createCourtCategory(req, res) {
    const courtCategory = await createCourtCategory(req.body);
    return res.json({
      status: "success",
      message: "CourtCategory created successfully",
      data: courtCategory,
    });
  }
  async updateCourtCategory(req, res) {
    const courtCategory = updateCourtCategory(req.params.id, req.body);
    if (!courtCategory) return res.status(400).send("CourtCategory not found");
    return res.json({
      status: "success",
      message: "CourtCategory updated successfully",
      data: courtCategory,
    });
  }
  async deleteCourtCategory(req, res) {
    const courtCategory = deleteCourtCategory(req.params.id);
    if (!courtCategory) return res.status(400).send("CourtCategory not found");
    return res.json({
      status: "success",
      message: "CourtCategory deleted successfully",
      data: courtCategory,
    });
  }
}

module.exports = new CourtCategoriesController();
