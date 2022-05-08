const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const TaxValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    percent: joi.number().required(),
  });
  validateRequest(req, next, schema);
};
module.exports = TaxValidation;
