const CaseStageModel = require("../models/case_stages.model");

module.exports = {
  getAllCaseStage: () => {
    return CaseStageModel.find();
  },
  getCaseStage: (id) => {
    return CaseStageModel.findById(id);
  },
  createCaseStage: (data) => {
    return CaseStageModel.create({ ...data });
  },
  updateCaseStage: (id, data) => {
    return CaseStageModel.findByIdAndUpdate(
      id,
      { $set: { ...data } },
      {
        new: true,
      }
    );
  },
  deleteCaseStage: (id) => {
    return CaseStageModel.findByIdAndDelete(id);
  },
};
