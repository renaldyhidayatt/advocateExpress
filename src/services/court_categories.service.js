const CourtCategoryModel = require("../models/court_categories.model");

module.exports = {
  getAllCourtCategories: () => {
    return CourtCategoryModel.find();
  },
  getCourtCategory: (id) => {
    return CourtCategoryModel.findById(id);
  },
  createCourtCategory: (data) => {
    return CourtCategoryModel.create({ ...data });
  },
  updateCourtCategory: (id, data) => {
    return CourtCategoryModel.findByIdAndUpdate(
      data,
      { $set: { ...data } },
      {
        new: true,
      }
    );
  },
  deleteCourtCategory: (id) => {
    return CourtCategoryModel.findByIdAndDelete(id);
  },
};
