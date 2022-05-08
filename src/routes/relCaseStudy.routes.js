const RelCaseStudyController = require("../controllers/relcasestudy.controller");
const AuthMiddleware = require("../middleware/auth");
const router = require("express").Router();
const RelCaseStudyValidate = require("../validation/rel_case_study.validation");
const { uploadPdfOrDocs } = require("../utils/uploadfile");

router.get("/", RelCaseStudyController.getAllRelCaseStudy);
router.get("/:id", RelCaseStudyController.getRelCaseStudy);
router.post(
  "/",
  AuthMiddleware,
  uploadPdfOrDocs.single("filename"),
  RelCaseStudyValidate,
  RelCaseStudyController.createRelCaseStudy
);
router.put(
  "/:id",
  AuthMiddleware,
  uploadPdfOrDocs.single("filename"),
  RelCaseStudyValidate,
  RelCaseStudyController.updateRelCaseStudy
);
router.delete(
  "/:id",
  AuthMiddleware,
  RelCaseStudyController.deleteRelCaseStudy
);

module.exports = router;
