const router = require("express").Router();
const ContactController = require("../controllers/contact.controller");
const AuthMiddleware = require("../middleware/auth");
const ContactValidate = require("../validation/contact.validation");

router.get("/", ContactController.getAllContact);
router.get("/:id", ContactController.getContact);
router.post(
  "/",
  AuthMiddleware,
  ContactValidate,
  ContactController.createContact
);
router.put(
  "/:id",
  AuthMiddleware,
  ContactValidate,
  ContactController.updateContact
);
router.delete(
  "/:id",
  AuthMiddleware,
  ContactValidate,
  ContactController.deleteContact
);

module.exports = router;
