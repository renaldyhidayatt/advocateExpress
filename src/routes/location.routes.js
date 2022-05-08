const LocationController = require("../controllers/location.controller");

const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const LocationValidate = require("../validation/location.validation");

router.get("/", LocationController.getAllLocations);
router.get("/:id", LocationController.getLocationById);
router.post(
  "/",
  AuthMiddleware,
  LocationValidate,
  LocationController.createLocation
);
router.put(
  "/:id",
  AuthMiddleware,
  LocationValidate,
  LocationController.updateLocation
);
router.delete("/:id", AuthMiddleware, LocationController.deleteLocation);

module.exports = router;
