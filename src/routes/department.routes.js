const DepartmentController = require("../controllers/department.controller");

const router = require("express").Router();

router.get("/", DepartmentController.getAllDepartment);
router.get("/:id", DepartmentController.getDepartment);
router.post("/", DepartmentController.createDepartment);
router.put("/:id", DepartmentController.updateDepartment);
router.delete("/:id", DepartmentController.deleteDepartment);

module.exports = router;
