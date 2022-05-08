const CaseStageController = require("../controllers/case_stages.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CaseStageValidate = require("../validation/case_stage.validation");

router.get("/", CaseStageController.getCaseStages);
router.get("/:id", CaseStageController.getCaseStage);
router.post(
  "/",
  AuthMiddleware,
  CaseStageValidate,
  CaseStageController.createCaseStage
);
router.put(
  "/:id",
  AuthMiddleware,
  CaseStageValidate,
  CaseStageController.updateCaseStage
);
router.delete("/:id", AuthMiddleware, CaseStageController.deleteCaseStage);

module.exports = router;
