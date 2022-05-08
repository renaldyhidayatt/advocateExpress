const RelCaseStudyModel = require("../models/rel_case_study.model");

module.exports = {
  getAllRelCaseStudy: () => {
    return RelCaseStudyModel.find();
  },
  getRelCaseStudy: (id) => {
    return RelCaseStudyModel.findOne({
      case_study_id: id,
    });
  },
  getRelCaseStudy: (id) => {
    return RelCaseStudyModel.findById(id);
  },
  createRelCaseStudy: (data) => {
    return RelCaseStudyModel.create({ ...data });
  },
  updateRelCaseStudy: (id, data) => {
    return RelCaseStudyModel.findByIdAndUpdate(id, { $set: { ...data } });
  },
  deleteRelCaseStudy: (id) => {
    return RelCaseStudyModel.findByIdAndDelete(id);
  },
};
