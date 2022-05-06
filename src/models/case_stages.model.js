const mongoose = require("mongoose");

const CaseStageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const CaseStage = mongoose.model("CaseStage", CaseStageSchema);

module.exports = CaseStage;
