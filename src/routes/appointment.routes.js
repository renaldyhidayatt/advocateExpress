const AppointmentController = require("../controllers/appointment.controller");
const router = require("express").Router();

router.get("/", AppointmentController.getAllAppointments);
router.get("/:id", AppointmentController.getAppointment);
router.post("/", AppointmentController.createAppointment);
router.put("/:id", AppointmentController.updateAppointment);
router.delete("/:id", AppointmentController.deleteAppointment);

module.exports = router;
