const CaseStageController = require("../controllers/case_stages.controller");
const router = require("express").Router();

router.get("/", CaseStageController.getCaseStages);
router.get("/:id", CaseStageController.getCaseStage);
router.post("/", CaseStageController.createCaseStage);
router.put("/:id", CaseStageController.updateCaseStage);
router.delete("/:id", CaseStageController.deleteCaseStage);

module.exports = router;
