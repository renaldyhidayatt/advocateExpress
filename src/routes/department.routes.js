const DepartmentController = require("../controllers/department.controller");

const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const DepartmentValidate = require("../validation/department.validation");

router.get("/", DepartmentController.getAllDepartment);
router.get("/:id", DepartmentController.getDepartment);
router.post(
  "/",
  AuthMiddleware,
  DepartmentValidate,
  DepartmentController.createDepartment
);
router.put(
  "/:id",
  AuthMiddleware,
  DepartmentValidate,
  DepartmentController.updateDepartment
);
router.delete("/:id", AuthMiddleware, DepartmentController.deleteDepartment);

module.exports = router;
