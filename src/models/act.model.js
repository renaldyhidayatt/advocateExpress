const mongoose = require("mongoose");

const ActSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Act = mongoose.model("Act", ActSchema);

module.exports = Act;
