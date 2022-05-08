const AppointmentController = require("../controllers/appointment.controller");
const router = require("express").Router();
const AuthMiddleware = require("../middleware/auth");
const AppointmentValidate = require("../validation/appointment.validation");

router.get("/", AppointmentController.getAllAppointments);
router.get("/:id", AppointmentController.getAppointment);
router.post(
  "/",
  AuthMiddleware,
  AppointmentValidate,
  AppointmentController.createAppointment
);
router.put(
  "/:id",
  AuthMiddleware,
  AppointmentValidate,
  AppointmentController.updateAppointment
);
router.delete("/:id", AuthMiddleware, AppointmentController.deleteAppointment);

module.exports = router;
