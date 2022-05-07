const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const RelCaseStudyValidation = (req, res, next) => {
  const schema = joi.object().keys({
    caseStudy: joi.string().required(),
    title: joi.string().required(),
    filename: joi.string().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = RelCaseStudyValidation;
