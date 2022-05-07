const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const AttendanceValidation = (req, res, next) => {
  const schema = joi.object().keys({
    user: joi.string().required(),
    mark_in: joi.date().required(),
    mark_out: joi.date().required(),
    mark_in_notes: joi.string().required(),
    mark_out_notes: joi.string().required(),
    current_status: joi.string().required(),
  });
  validateRequest(req, next, schema);
};
module.exports = AttendanceValidation;
