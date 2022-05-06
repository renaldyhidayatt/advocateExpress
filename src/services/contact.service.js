const ContactModel = require("../models/contact.model");

module.exports = {
  getAllContact: () => {
    return ContactModel.find();
  },
  getContact: (id) => {
    return ContactModel.findById(req.params.id);
  },
  createContact: (data) => {
    return ContactModel.create({ ...data });
  },
  updateContact: (id, data) => {
    return ContactModel.findByIdAndUpdate(
      id,
      { $set: { ...data } },
      {
        new: true,
      }
    );
  },
  deleteContact: (id) => {
    return ContactModel.findByIdAndDelete(id);
  },
};
