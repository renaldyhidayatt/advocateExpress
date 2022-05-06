const CourtModel = require("../models/court.model");

module.exports = {
  getAllCourts: () => {
    return CourtModel.find();
  },
  getCourt: (id) => {
    return CourtModel.findById(id);
  },
  createCourt: (data) => {
    return CourtModel.create({ ...data });
  },
  updateCourt: (id, data) => {
    return CourtModel.findByIdAndUpdate(
      id,
      { $set: { ...data } },
      {
        new: true,
      }
    );
  },
  deleteCourt: (id) => {
    return CourtModel.findByIdAndDelete(id);
  },
};
