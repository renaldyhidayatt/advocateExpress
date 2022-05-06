const mongoose = require("mongoose");

const RelCaseStudySchema = new mongoose.Schema({
  caseStudy: {
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
