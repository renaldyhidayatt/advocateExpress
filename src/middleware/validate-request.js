const Joi = require("joi");

module.exports = validateRequest;

function validateRequest(req, next, schema) {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    const error = new Error("Invalid Request");
    error.status = 400;
    next(error);
  } else {
    next();
  }
}
