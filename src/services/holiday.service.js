const HolidayModel = require("../models/holiday.model");

module.exports = {
  getAllHolidays: () => {
    return HolidayModel.find();
  },
  getHoliday: (id) => {
    return HolidayModel.findById(id);
  },
  getHolidayMonth: (month) => {
    return HolidayModel.aggregate([
      { $addFields: { month: { $month: "$date" } } },
      { $match: { month: month ? "3" : "3" } },
    ]);
  },
  createHoliday: (data) => {
    return HolidayModel.create({ ...data });
  },
  updateHoliday: (id, data) => {
    return HolidayModel.findByIdAndUpdate(id, { $set: { ...data } });
  },
  deleteHoliday: (id) => {
    return HolidayModel.findByIdAndDelete(id);
  },
};
