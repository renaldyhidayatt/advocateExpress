const CourtController = require("../controllers/court.controller");
const router = require("express").Router();

router.get("/", CourtController.getAllCourts);
router.get("/:id", CourtController.getCourt);
router.post("/", CourtController.createCourt);
router.put("/:id", CourtController.updateCourt);
router.delete("/:id", CourtController.deleteCourt);

module.exports = router;
