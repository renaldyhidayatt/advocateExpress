const CasesController = require("../controllers/cases.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CaseValidate = require("../validation/cases.validation");

router.get("/", CasesController.getCases);
router.get("/:id", CasesController.getCaseById);
router.post("/", AuthMiddleware, CaseValidate, CasesController.createCase);
router.put("/:id", AuthMiddleware, CaseValidate, CasesController.updateCase);
router.delete("/:id", AuthMiddleware, CasesController.deleteCase);
router.get("/date/:date", CasesController.casesByDate);
router.put("/restore/:id", AuthMiddleware, CasesController.restoreCase);
router.put(
  "/set-is-started/:id",
  AuthMiddleware,
  CasesController.updateSetIsStarted
);
router.get("/court/:courtId", AuthMiddleware, CasesController.getCasesCourtId);

module.exports = router;
