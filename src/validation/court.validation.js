const joi = require("joi");

const validateRequest = require("../middleware/validate-request");

const CourtValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    location: joi.string().required(),
    courtCategory: joi.string().required(),
    description: joi.string().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = CourtValidation;
