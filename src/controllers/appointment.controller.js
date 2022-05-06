const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../services/appointment.service");

class AppointmentController {
  async getAllAppointments(req, res) {
    try {
      const appointments = await getAllAppointments();
      res.status(200).json({
        message: "Success",
        data: appointments,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async getAppointment(req, res) {
    try {
      const appointment = await getAppointment(req.params.id);
      res.status(200).json({
        message: "Success",
        data: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async createAppointment(req, res) {
    try {
      const body = {
        title: req.body.title,
        contact: req.body.contact,
        motive: req.body.motive,
        date_time: req.body.date_time,
        notes: req.body.notes,
      };
      const appointment = await createAppointment(body);
      res.status(201).json({
        message: "Success",
        data: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async updateAppointment(req, res) {
    try {
      const appointment = await updateAppointment(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        data: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
  async deleteAppointment(req, res) {
    try {
      const appointment = await deleteAppointment(req.params.id);
      res.status(200).json({
        message: "Success",
        data: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  }
}

module.exports = new AppointmentController();
