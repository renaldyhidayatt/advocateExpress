const UserController = require("../controllers/user.controller");
const router = require("express").Router();

const AuthMiddleware = require("../middleware/auth");
const UserValidate = require("../validation/user.validation");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getById);
router.post("/", AuthMiddleware, UserValidate, UserController.create);
router.put("/:id", AuthMiddleware, UserValidate, UserController.update);
router.delete("/:id", AuthMiddleware, UserController.delete);

module.exports = router;
