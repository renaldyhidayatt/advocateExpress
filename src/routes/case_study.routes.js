const CaseStudyController = require("../controllers/case_study.controller");
const router = require("express").Router();

router.get("/", CaseStudyController.getAllCaseStudy);
router.get("/:id", CaseStudyController.getCaseStudy);
router.post("/", CaseStudyController.createCaseStudy);
router.put("/:id", CaseStudyController.updateCaseStudy);
router.delete("/:id", CaseStudyController.deleteCaseStudy);

module.exports = router;
