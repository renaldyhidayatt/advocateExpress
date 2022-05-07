const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const CourtCategoriesValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = CourtCategoriesValidation;
