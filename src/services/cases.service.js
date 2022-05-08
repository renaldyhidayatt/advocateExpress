const CasesModel = require("../models/cases.model");

module.exports = {
  getCases: () => {
    const cases = CasesModel.find({});
    return cases;
  },
  getCaseById: (id) => {
    const caseById = CasesModel.findById(id);
    if (!caseById) {
      throw new Error("Case not found");
    }
    return caseById;
  },
  createCase: (caseData) => {
    return CasesModel.create({ ...caseData });
  },
  updateCase: (id, caseData) => {
    return CasesModel.findByIdAndUpdate(id, {
      $set: { ...caseData },
    });
  },
  deleteCase: (id) => {
    return CasesModel.findByIdAndDelete(id);
  },
  casesByDate: (date) => {
    const cases = CasesModel.find({ date: date });
    return cases;
  },
  restoreCase: (id) => {
    return CasesModel.findByIdAndUpdate(id, { is_archived: true });
  },
  updateSetIsStarted: (id) => {
    return CasesModel.findByIdAndUpdate(id, { is_started: false });
  },
  getCasesCourtId: (courtId) => {
    const cases = CasesModel.find({ court: courtId }).populate("user");
    return cases;
  },
};
