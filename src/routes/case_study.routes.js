const CaseStudyController = require("../controllers/case_study.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CaseStudyValidate = require("../validation/case_study.validation");

router.get("/", CaseStudyController.getAllCaseStudy);
router.get("/:id", CaseStudyController.getCaseStudy);
router.post(
  "/",
  AuthMiddleware,
  CaseStudyValidate,
  CaseStudyController.createCaseStudy
);
router.put(
  "/:id",
  AuthMiddleware,
  CaseStudyValidate,
  CaseStudyController.updateCaseStudy
);
router.delete("/:id", AuthMiddleware, CaseStudyController.deleteCaseStudy);

module.exports = router;
