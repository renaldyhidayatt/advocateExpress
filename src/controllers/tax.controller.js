const {
  getTaxes,
  getTaxById,
  createTax,
  updateTax,
  deleteTax,
} = require("../services/tax.service");

class TaxController {
  async getTaxes(req, res) {
    try {
      const taxes = await getTaxes();
      return res.json(taxes);
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getTaxById(req, res) {
    try {
      const tax = await getTaxById(req.params.id);
      return res.json(tax);
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createTax(req, res) {
    try {
      const tax = await createTax(req.body);
      return res.status(201).json({
        message: "Success",
        data: tax,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateTax(req, res) {
    try {
      const tax = await updateTax(req.params.id, req.body);
      return res.status(200).json({
        message: "Success",
        data: tax,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteTax(req, res) {
    try {
      const tax = await deleteTax(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: tax,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new TaxController();
