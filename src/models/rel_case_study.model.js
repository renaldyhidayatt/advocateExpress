const mongoose = require("mongoose");

const RelCaseStudySchema = new mongoose.Schema({
  case_study_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CaseStudy",
  },
  title: {
    type: String,
  },
  filename: {
    type: String,
  },
});

const RelCaseStudy = mongoose.model("RelCaseStudy", RelCaseStudySchema);

module.exports = RelCaseStudy;
