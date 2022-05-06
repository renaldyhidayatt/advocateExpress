const UserController = require("../controllers/user.controller");
const router = require("express").Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getById);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
