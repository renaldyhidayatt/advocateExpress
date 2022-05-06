const DepartmentModel = require("../models/department.model");

module.exports = {
  getAllDepartment: () => {
    return DepartmentModel.find();
  },
  getDepartment: (id) => {
    return DepartmentModel.findById(id);
  },
  createDepartment: (data) => {
    return DepartmentModel.create({ ...data });
  },
  updateDepartment: (id, data) => {
    return DepartmentModel.findByIdAndUpdate(id, {
      $set: { ...data },
    });
  },
  deleteDepartment: (id) => {
    return DepartmentModel.findByIdAndDelete(id);
  },
};
