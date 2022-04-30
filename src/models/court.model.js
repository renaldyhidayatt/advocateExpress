const mongoose = require("mongoose");

const CourtSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location_id: {
    type: String,
  },
  court_category_id: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Court = mongoose.model("Court", CourtSchema);

module.exports = Court;
