const AppointmentModel = require("../models/appointment.models");

module.exports = {
  // Get all appointments
  getAllAppointments: () => {
    return AppointmentModel.find();
  },
  getAppointment: (id) => {
    return AppointmentModel.findById(id).populate("contact");
  },
  createAppointment: (data) => {
    return AppointmentModel.create({ ...data });
  },
  updateAppointment: (id, data) => {
    return AppointmentModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...data,
        },
      },
      {
        new: true,
      }
    );
  },
  deleteAppointment: (id) => {
    return AppointmentModel.findByIdAndDelete(id);
  },
};
