const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const AppointmentValidation = (req, res, next) => {
  const schema = joi.object().keys({
    title: joi.string().required(),
    contact: joi.string().required(),
    motive: joi.string().required(),
    date_time: joi.date().required(),
    notes: joi.string().required(),
  });
  validateRequest(req, next, schema);
};

module.exports = AppointmentValidation;
