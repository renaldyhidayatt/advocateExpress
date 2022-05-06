const UserModel = require("../models/user.model");

module.exports = {
  userfindUsername: (username) => {
    const user = UserModel.findOne({ username: username });
    if (!user) return null;

    return user;
  },
  getUsers: () => {
    return UserModel.find();
  },
  getUserById: (id) => {
    return UserModel.findById(id);
  },
  createUser: (data) => {
    return UserModel.create({ ...data });
  },
  updateUser: (id, data) => {
    return UserModel.findByIdAndUpdate(id, { $set: { ...data } });
  },
  deleteUser: (id) => {
    return UserModel.findByIdAndDelete(id);
  },
};
