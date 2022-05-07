const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const ContactValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    contact: joi.string().required(),
    email: joi.string().required(),
    address: joi.string().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = ContactValidation;
