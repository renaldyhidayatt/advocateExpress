const mongoose = require("mongoose");

const CaseStudySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  cases_categories: {
    type: String,
  },
  notes: {
    type: String,
  },
  result: {
    type: String,
  },
});

const CaseStudy = mongoose.model("CaseStudy", CaseStudySchema);

module.exports = CaseStudy;
