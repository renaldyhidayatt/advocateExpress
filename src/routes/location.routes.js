const LocationController = require("../controllers/location.controller");

const router = require("express").Router();

router.get("/", LocationController.getAllLocations);
router.get("/:id", LocationController.getLocationById);
router.post("/", LocationController.createLocation);
router.put("/:id", LocationController.updateLocation);
router.delete("/:id", LocationController.deleteLocation);

module.exports = router;
