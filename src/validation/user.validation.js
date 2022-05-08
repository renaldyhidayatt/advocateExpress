const joi = require("joi");

const validateRequest = require("../middleware/validate-request");

const UserValidation = (req, res, next) => {
  const schema = joi.object().keys({
    username: joi.string().required(),
    email: joi.string().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    status: joi.boolean().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = UserValidation;
