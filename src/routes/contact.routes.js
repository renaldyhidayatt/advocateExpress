const router = require("express").Router();
const ContactController = require("../controllers/contact.controller");

router.get("/", ContactController.getAllContact);
router.get("/:id", ContactController.getContact);
router.post("/", ContactController.createContact);
router.put("/:id", ContactController.updateContact);
router.delete("/:id", ContactController.deleteContact);

module.exports = router;
