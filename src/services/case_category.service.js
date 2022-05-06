const CaseCategoryModel = require("../models/case_categories.model");

module.exports = {
  getAllCaseCategories: () => {
    return CaseCategoryModel.find();
  },
  getCaseCategory: (id) => {
    return CaseCategoryModel.findById(id);
  },
  createCaseCategory: (data) => {
    return CaseCategoryModel.create({ ...data });
  },
  updateCaseCategory: (id, data) => {
    return CaseCategoryModel.findByIdAndUpdate(
      id,
      { $set: { ...data } },
      {
        new: true,
      }
    );
  },
  deleteCaseCategory: (id) => {
    return CaseCategoryModel.findByIdAndDelete(id);
  },
};
