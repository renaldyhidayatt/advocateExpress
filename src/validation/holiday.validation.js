const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const HolidayValidation = (req, res, next) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    date: joi.date().required(),
  });
  validateRequest(req, next, schema);
};
module.exports = HolidayValidation;
