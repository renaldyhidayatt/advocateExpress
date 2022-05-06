const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
    default: "default.jpg",
  },
  address: {
    type: String,
  },
  join_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
  },
});

const User = mongoose.model("User", UserModel);

module.exports = User;
