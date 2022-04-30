const mongoose = require("mongoose");

const CourtCategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const CourtCategory = mongoose.model("CourtCategory", CourtCategorySchema);

module.exports = CourtCategory;
