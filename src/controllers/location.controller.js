const {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} = require("../services/location.service");

class LocationController {
  async getAllLocations(req, res) {
    const locations = await getAllLocations();
    return res.json({
      status: "success",
      data: locations,
    });
  }
  async getLocationById(req, res) {
    const location = await getLocationById(req.params.id);
    if (!location) return res.status(400).send("Location not found");
    return res.json({
      status: "success",
      data: location,
    });
  }
  async createLocation(req, res) {
    const location = await createLocation(req.body);
    return res.json({
      status: "success",
      message: "Location created successfully",
      data: location,
    });
  }
  async updateLocation(req, res) {
    const location = await updateLocation(req.params.id, req.body);
    if (!location) return res.status(400).send("Location not found");
    return res.json({
      status: "success",
      message: "Location updated successfully",
      data: location,
    });
  }
  async deleteLocation(req, res) {
    const location = await deleteLocation(req.params.id);
    if (!location) return res.status(400).send("Location not found");
    return res.json({
      status: "success",
      message: "Location deleted successfully",
      data: location,
    });
  }
}

module.exports = new LocationController();
