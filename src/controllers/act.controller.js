const {
  getActs,
  getAct,
  createAct,
  updateAct,
  deleteAct,
} = require("../services/act.service");

class ActController {
  async getActs(req, res) {
    try {
      const acts = await getActs();
      return res.status(200).json({
        message: "Success",
        data: acts,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getAct(req, res) {
    try {
      const act = await getAct(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: act,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createAct(req, res) {
    try {
      const body = {
        title: req.body.title,
        description: req.body.description,
      };
      const act = await createAct(body);
      return res.status(201).json({
        message: "Success",
        data: act,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateAct(req, res) {
    try {
      const act = await updateAct(req.params.id, req.body);
      return res.status(200).json({
        message: "Success",
        data: act,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteAct(req, res) {
    try {
      const act = await deleteAct(req.params.id);
      return res.status(200).json({
        message: "Success",
        data: act,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new ActController();
