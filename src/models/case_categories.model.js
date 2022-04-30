const mongoose = require("mongoose");

const CaseCategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  parent_id: {
    type: String,
  },
});

const CaseCategory = mongoose.model("CaseCategory", CaseCategorySchema);

module.exports = CaseCategory;