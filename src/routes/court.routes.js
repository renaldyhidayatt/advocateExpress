const CourtController = require("../controllers/court.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const CourtValidate = require("../validation/court.validation");

router.get("/", CourtController.getAllCourts);
router.get("/:id", CourtController.getCourt);
router.post("/", AuthMiddleware, CourtValidate, CourtController.createCourt);
router.put("/:id", AuthMiddleware, CourtValidate, CourtController.updateCourt);
router.delete(
  "/:id",
  AuthMiddleware,
  CourtValidate,
  CourtController.deleteCourt
);

module.exports = router;
