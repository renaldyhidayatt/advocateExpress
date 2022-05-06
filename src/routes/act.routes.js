const router = require("express").Router();
const ActController = require("../controllers/act.controller");

router.get("/", ActController.getActs);
router.get("/:id", ActController.getAct);
router.post("/", ActController.createAct);
router.put("/:id", ActController.updateAct);
router.delete("/:id", ActController.deleteAct);

module.exports = router;
