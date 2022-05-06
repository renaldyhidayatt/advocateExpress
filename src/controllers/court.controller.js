const {
  getAllCourts,
  getCourt,
  createCourt,
  updateCourt,
  deleteCourt,
} = require("../services/court.service");

class CourtController {
  async getAllCourts(req, res) {
    const court = await getAllCourts();
    return res.json({
      status: "success",
      data: court,
    });
  }
  async getCourt(req, res) {
    const court = await getCourt(req.params.id);
    if (!contact) return res.status(400).send("Contact not found");
    return res.json({
      status: "success",
      data: court,
    });
  }
  async createCourt(req, res) {
    const court = await createCourt(req.body);
    return res.json({
      status: "success",
      message: "Court created successfully",
      data: court,
    });
  }
  async updateCourt(req, res) {
    const court = await updateCourt(req.params.id, req.body);
    if (!court) return res.status(400).send("Contact not found");
    return res.json({
      status: "success",
      message: "Court updated successfully",
      data: court,
    });
  }
  async deleteCourt(req, res) {
    const court = await deleteCourt(req.params.id);
    if (!court) return res.status(400).send("Contact not found");
    return res.json({
      status: "success",
      message: "Court deleted successfully",
      data: court,
    });
  }
}
module.exports = new CourtController();
