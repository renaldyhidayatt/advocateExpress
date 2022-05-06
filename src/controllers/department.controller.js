const {
  getAllDepartment,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../services/department.service");

class DepartmentController {
  async getAllDepartment(req, res) {
    const departments = await getAllDepartment();
    return res.json({
      status: "success",
      data: departments,
    });
  }
  async getDepartment(req, res) {
    const department = await getDepartment(req.params.id);
    if (!department) return res.status(400).send("Department not found");
    return res.json({
      status: "success",
      data: department,
    });
  }
  async createDepartment(req, res) {
    const department = await createDepartment(req.body);
    return res.json({
      status: "success",
      message: "Department created successfully",
      data: department,
    });
  }
  async updateDepartment(req, res) {
    const department = await updateDepartment(req.params.id, req.body);
    if (!department) return res.status(400).send("Department not found");
    return res.json({
      status: "success",
      message: "Department updated successfully",
      data: department,
    });
  }
  async deleteDepartment(req, res) {
    const department = await deleteDepartment(req.params.id);
    if (!department) return res.status(400).send("Department not found");
    return res.json({
      status: "success",
      message: "Department deleted successfully",
      data: department,
    });
  }
}

module.exports = new DepartmentController();
