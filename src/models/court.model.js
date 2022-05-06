const mongoose = require("mongoose");

const CourtSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  courtCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourtCategory",
  },
  description: {
    type: String,
  },
});

const Court = mongoose.model("Court", CourtSchema);

module.exports = Court;
