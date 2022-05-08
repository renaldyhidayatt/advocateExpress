const TaxController = require("../controllers/tax.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const TaxValidate = require("../validation/tax.validation");

router.get("/", TaxController.getTaxes);
router.get("/:id", TaxController.getTaxById);
router.post("/", AuthMiddleware, TaxValidate, TaxController.createTax);
router.put("/:id", AuthMiddleware, TaxValidate, TaxController.updateTax);
router.delete("/:id", AuthMiddleware, TaxController.deleteTax);

module.exports = router;
