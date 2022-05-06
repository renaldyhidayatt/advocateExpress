const LocationModel = require("../models/location.model");

module.exports = {
  getAllLocations: () => {
    return LocationModel.find();
  },
  getLocationById: (id) => {
    return LocationModel.findById(id);
  },
  createLocation: (data) => {
    return LocationModel.create({ ...data });
  },
  updateLocation: (id, data) => {
    return LocationModel.findByIdAndUpdate(id, { $set: { ...data } });
  },
  deleteLocation: (id) => {
    return LocationModel.findByIdAndDelete(id);
  },
};
