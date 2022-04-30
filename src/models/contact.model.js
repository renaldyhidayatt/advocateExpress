const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
