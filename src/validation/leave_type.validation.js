const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const LeaveTypeValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    description: joi.string().required(),
    leaves: joi.number().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = LeaveTypeValidation;
