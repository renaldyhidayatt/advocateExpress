const router = require("express").Router();
const ActController = require("../controllers/act.controller");
const ActValidate = require("../validation/act.validation");
const AuthMiddleware = require("../middleware/auth");

router.get("/", ActController.getActs);
router.get("/:id", ActController.getAct);
router.post("/", AuthMiddleware, ActValidate, ActController.createAct);
router.put("/:id", AuthMiddleware, ActValidate, ActController.updateAct);
router.delete("/:id", AuthMiddleware, ActController.deleteAct);

module.exports = router;
