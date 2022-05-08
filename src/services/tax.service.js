const TaxModel = require("../models/tax.model");

module.exports = {
  getTaxes: () => {
    const taxes = TaxModel.find({});
    return taxes;
  },
  getTaxById: (id) => {
    const taxById = TaxModel.findById(id);
    if (!taxById) {
      throw new Error("Tax not found");
    }
    return taxById;
  },
  createTax: (taxData) => {
    return TaxModel.create({ ...taxData });
  },
  updateTax: (id, taxData) => {
    return TaxModel.findByIdAndUpdate(id, { ...taxData });
  },
  deleteTax: (id) => {
    return TaxModel.findByIdAndDelete(id);
  },
};
