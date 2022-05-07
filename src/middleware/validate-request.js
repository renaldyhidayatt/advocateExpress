const Joi = require("joi");

module.exports = validateRequest;

function validateRequest(req, next, schema) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const errorMessages = error.details.map((item) => item.message);
    const errorMessage = errorMessages.join(", ");
    return next(new Error(errorMessage));
  } else {
    req.body = value;
    next();
  }
}
