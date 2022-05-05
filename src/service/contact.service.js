const ContactModel = require("../models/contact.model");

module.exports = {
  getAllContact: async (req, res) => {
    try {
      const contacts = await ContactModel.find();
      res.status(200).json({
        message: "Success",
        data: contacts,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getContact: async (req, res) => {
    try {
      const contact = await ContactModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createContact: async (req, res) => {
    try {
      const contact = await ContactModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateContact: async (req, res) => {
    try {
      const contact = await ContactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteContact: async (req, res) => {
    try {
      const contact = await ContactModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
