const mongoose = require("mongoose");

const CasesModel = new mongoose.Schema({
  title: {
    type: String,
  },
  case_no: {
    type: String,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Court",
  },
  court_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourtCategory",
  },
  case_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CaseCategory",
  },
  act_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Act",
  },
  description: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  hearing_date: {
    type: Date,
  },
  o_lawyer: {
    type: String,
  },
  fees: {
    type: Number,
  },
  is_started: {
    type: Boolean,
  },
  is_archived: {
    type: Boolean,
  },
  note: {
    type: String,
  },
});

const Cases = mongoose.model("Cases", CasesModel);

module.exports = Cases;
