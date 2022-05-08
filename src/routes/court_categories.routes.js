const CourtCategoriesController = require("../controllers/court_categories.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CourtCategoryValidate = require("../validation/court_categories.validation");

router.get("/", CourtCategoriesController.getAllCourtCategories);
router.get("/:id", CourtCategoriesController.getCourtCategory);
router.post(
  "/",
  AuthMiddleware,
  CourtCategoryValidate,
  CourtCategoriesController.createCourtCategory
);
router.put(
  "/:id",
  AuthMiddleware,
  CourtCategoryValidate,
  CourtCategoriesController.updateCourtCategory
);
router.delete(
  "/:id",
  AuthMiddleware,
  CourtCategoriesController.deleteCourtCategory
);

module.exports = router;
