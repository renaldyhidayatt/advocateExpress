const CaseCategoryController = require("../controllers/case_categories.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CaseCategoryValidate = require("../validation/case_categories.validation");

router.get("/", CaseCategoryController.getAllCaseCategories);
router.get("/:id", CaseCategoryController.getCaseCategory);
router.post(
  "/",
  AuthMiddleware,
  CaseCategoryValidate,
  CaseCategoryController.createCaseCategory
);
router.put(
  "/:id",
  AuthMiddleware,
  CaseCategoryValidate,
  CaseCategoryController.updateCaseCategory
);
router.delete(
  "/:id",
  AuthMiddleware,
  CaseCategoryController.deleteCaseCategory
);

module.exports = router;
