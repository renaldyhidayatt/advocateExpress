const joi = require("joi");

const validateRequest = require("../middleware/validate-request");

const CaseStudyValidation = (req, res, next) => {
  const schema = joi.object().keys({
    title: joi.string().required(),
    cases_categories: joi.string().required(),
    notes: joi.string().required(),
    result: joi.string().required(),
  });
  validateRequest(req, next, schema);
};
module.exports = CaseStudyValidation;
