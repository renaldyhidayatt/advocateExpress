const joi = require("joi");
const validateRequest = require("../middleware/validate-request");

const CasesValidation = (req, res, next) => {
  const schema = joi.object().keys({
    title: joi.string().required(),
    case_no: joi.string().required(),
    client: joi.string().required(),
    location: joi.string().required(),
    court: joi.string().required(),
    court_category: joi.string().required(),
    case_category: joi.string().required(),
    act_id: joi.string().required(),
    description: joi.string().required(),
    start_date: joi.date().required(),
    hearing_date: joi.date().required(),
    o_lawyer: joi.string().required(),
    fees: joi.number().required(),
    is_started: joi.boolean().required(),
    is_archived: joi.boolean().required(),
  });
  validateRequest(req, next, schema);
};
module.exports = CasesValidation;
