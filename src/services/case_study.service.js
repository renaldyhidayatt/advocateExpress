const CaseStudyModel = require("../models/case_study.model");

module.exports = {
  getAllCaseStudy: () => {
    return CaseStudyModel.find();
  },
  getCaseStudy: (id) => {
    return CaseStudyModel.findById(id);
  },
  createCaseStudy: (data) => {
    return CaseStudyModel.create({ ...data });
  },
  updateCaseStudy: (id, data) => {
    return CaseStudyModel.findByIdAndUpdate(req.params.id, {
      $set: { ...data },
    });
  },
  deleteCaseStudy: (id) => {
    return CaseStudyModel.findByIdAndDelete(id);
  },
};
