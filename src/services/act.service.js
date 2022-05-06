const ActModel = require("../models/act.model");

module.exports = {
  getActs: () => {
    return ActModel.find();
  },
  getAct: (id) => {
    return ActModel.findById(id);
  },
  createAct: (data) => {
    return ActModel.create({ ...data });
  },
  updateAct: (id, data) => {
    return ActModel.findByIdAndUpdate(id, { $set: { ...data } }, { new: true });
  },
  deleteAct: async (id) => {
    return ActModel.findByIdAndDelete(id);
  },
};
