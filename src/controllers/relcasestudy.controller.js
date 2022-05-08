const {
  getAllRelCaseStudy,
  getRelCaseStudy,
  updateRelCaseStudy,
  deleteRelCaseStudy,
  createRelCaseStudy,
} = require("../services/rel_case_study.service");

class RelCaseStudyController {
  async getAllRelCaseStudy(req, res) {
    const relCaseStudy = await getAllRelCaseStudy();
    return res.json({
      status: "success",
      data: relCaseStudy,
    });
  }
  async getRelCaseStudy(req, res) {
    try {
      const relCaseStudy = await getRelCaseStudy(req.params.id);
      if (!relCaseStudy) return res.status(400).send("RelCaseStudy not found");
      return res.json({
        status: "success",
        data: relCaseStudy,
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  async createRelCaseStudy(req, res) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send("No file uploaded");
      }
      const fileName = file.filename;
      const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
      const body = {
        caseStudy: req.body.caseStudy,
        title: req.body.title,
        filename: `${basePath}${fileName}`,
      };
      const relCaseStudy = await createRelCaseStudy(body);
      return res.json({
        status: "success",
        data: relCaseStudy,
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  async updateRelCaseStudy(req, res) {
    try {
      const getRelcaseStudy = await getRelCaseStudy(req.params.id);
      const file = req.file;
      let imagepath;
      if (file) {
        const fileName = file.filename;
        const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
        imagepath = `${basePath}${fileName}`;
      } else {
        imagepath = getRelcaseStudy.filename;
      }
      const body = {
        caseStudy: req.body.caseStudy,
        title: req.body.title,
        filename: imagepath,
      };
      const relCaseStudy = await updateRelCaseStudy(req.params.id, body);
      if (!relCaseStudy) return res.status(400).send("RelCaseStudy not found");
      return res.json({
        status: "success",
        data: relCaseStudy,
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  async deleteRelCaseStudy(req, res) {
    try {
      const relCaseStudy = await deleteRelCaseStudy(req.params.id);
      if (!relCaseStudy) return res.status(400).send("RelCaseStudy not found");
      return res.json({
        status: "success",
        data: relCaseStudy,
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

module.exports = new RelCaseStudyController();
