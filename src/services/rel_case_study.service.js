const RelCaseStudyModel = require("../models/rel_case_study.model");

module.exports = {
  getAllRelCaseStudy: async (req, res) => {
    const relCaseStudies = await RelCaseStudyModel.findOne({
      case_study_id: req.params.id,
    });
    res.status(200).json({
      message: "Success",
      data: relCaseStudies,
    });
  },
  getRelCaseStudy: async (req, res) => {
    const relCaseStudy = await RelCaseStudyModel.findById(req.params.id);
    res.status(200).json({
      message: "Success",
      data: relCaseStudy,
    });
  },
  createRelCaseStudy: async (req, res) => {
    try {
      const relCaseStudy = await RelCaseStudyModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: relCaseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteRelCaseStudy: async (req, res) => {
    try {
      const relCaseStudy = await RelCaseStudyModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({
        message: "Success",
        data: relCaseStudy,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
