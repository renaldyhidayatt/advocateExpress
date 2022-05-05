const mongoose = require("mongoose");

const CasesModel = new mongoose.Schema({
  title: {
    type: String,
  },
  case_no: {
    type: String,
  },
  client_id: {
    type: Number,
  },
  location_id: {
    type: Number,
  },
  court_id: {
    type: Number,
  },
  court_category_id: {
    type: Number,
  },
  case_category_id: {
    type: Number,
  },
  act_id: {
    type: Number,
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
