const CourtCategoriesController = require("../controllers/court_categories.controller");
const router = require("express").Router();

router.get("/", CourtCategoriesController.getAllCourtCategories);
router.get("/:id", CourtCategoriesController.getCourtCategory);
router.post("/", CourtCategoriesController.createCourtCategory);
router.put("/:id", CourtCategoriesController.updateCourtCategory);
router.delete("/:id", CourtCategoriesController.deleteCourtCategory);

module.exports = router;
