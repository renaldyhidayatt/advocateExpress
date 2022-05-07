const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

function ActValidate(req, res, next) {
  const schema = joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
  });
  validateRequest(req, next, schema);
}

module.exports = ActValidate;
