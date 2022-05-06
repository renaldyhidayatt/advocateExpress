const {
  getAllContact,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../services/contact.service");

class ContactController {
  async getAllContact(req, res) {
    try {
      const contacts = await getAllContact();
      res.status(200).json({
        message: "Success",
        data: contacts,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getContact(req, res) {
    try {
      const contact = await getContact(req.params.id);
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createContact(req, res) {
    try {
      const body = {
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
      };
      const contact = await createContact(body);
      res.status(201).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateContact(req, res) {
    try {
      const contact = await updateContact(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteContact(req, res) {
    try {
      const contact = await deleteContact(req.params.id);
      res.status(200).json({
        message: "Success",
        data: contact,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new ContactController();
