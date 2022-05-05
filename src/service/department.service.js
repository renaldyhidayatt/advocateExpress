const DepartmentModel = require("../models/department.model");

module.exports = {
  getAllDepartment: async (req, res) => {
    try {
      const departments = await DepartmentModel.find();
      res.status(200).json({
        message: "Success",
        data: departments,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  getDepartment: async (req, res) => {
    try {
      const department = await DepartmentModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        data: department,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  createDepartment: async (req, res) => {
    try {
      const department = await DepartmentModel.create(req.body);
      res.status(201).json({
        message: "Success",
        data: department,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  updateDepartment: async (req, res) => {
    try {
      const department = await DepartmentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Success",
        data: department,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
  deleteDepartment: async (req, res) => {
    try {
      const department = await DepartmentModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Success",
        data: department,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  },
};
