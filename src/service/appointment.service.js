const AppointmentModel = require("../models/appointment.models");

module.exports = {
  // Get all appointments
  getAllAppointments: async (req, res) => {
    try {
      const appointments = await AppointmentModel.find();
      res.status(200).json({
        message: "Success",
        data: appointments,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  getAppointment: async (req, res) => {
    try {
      const appointment = await AppointmentModel.findById(req.params.id);
      res.status(200).json({
        message: "Success",
        appointment: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  createAppointment: async (req, res) => {
    try {
      const appointment = await AppointmentModel.create(req.body);
      res.status(201).json({
        message: "Success",
        appointment: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  updateAppointment: async (req, res) => {
    try {
      const appointment = await AppointmentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        message: "Success",
        appointment: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
  deleteAppointment: async (req, res) => {
    try {
      const appointment = await AppointmentModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({
        message: "Success",
        appointment: appointment,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
      });
    }
  },
};
