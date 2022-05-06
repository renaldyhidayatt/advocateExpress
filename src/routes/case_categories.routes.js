const CaseCategoryController = require("../controllers/case_categories.controller");
const router = require("express").Router();

router.get("/", CaseCategoryController.getAllCaseCategories);
router.get("/:id", CaseCategoryController.getCaseCategory);
router.post("/", CaseCategoryController.createCaseCategory);
router.put("/:id", CaseCategoryController.updateCaseCategory);
router.delete("/:id", CaseCategoryController.deleteCaseCategory);

module.exports = router;
