const router = require("express").Router();
const ActController = require("../controllers/act.controller");
const ActValidate = require("../validation/act.validation");

router.get("/", ActController.getActs);
router.get("/:id", ActController.getAct);
router.post("/", ActValidate, ActController.createAct);
router.put("/:id", ActController.updateAct);
router.delete("/:id", ActController.deleteAct);

module.exports = router;
