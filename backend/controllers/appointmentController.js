const Appointment = require("../models/Appointment");

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.json({ appointments });
  } catch (error) {
    console.error(error);
  }
};

exports.getAppointmentById = async (req, res) => {
  // const { username, email, phone } = req.body;
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findByPk(appointmentId);
    // console.log(appointment)
    res.json({ appointment });
  } catch (error) {
    console.error(error);
  }
};

exports.addAppointment = async (req, res) => {
  const { username, email, phone } = req.body;

  try {
    const appointment = await Appointment.create({ username, email, phone });
    res.json({ appointment });
  } catch (error) {
    console.error(error);
  }
};

exports.editAppointment = async (req, res) => {
  const { username, email, phone } = req.body;
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findByPk(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    appointment.username = username;
    appointment.email = email;
    appointment.phone = phone;

    await appointment.save();
  } catch (error) {
    console.error(error);
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    await Appointment.destroy({ where: { id: appointmentId } });
  } catch (error) {
    console.error(error);
  }
};
