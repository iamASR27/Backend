const express = require("express");

const appointmentController = require("../controllers/appointmentController");

const router = express.Router();

router.get("/get-appointment", appointmentController.getAllAppointments);
router.get("/get-appointment/:id", appointmentController.getAppointmentById);
router.post("/add-appointment", appointmentController.addAppointment);
router.put("/edit-appointment/:id", appointmentController.editAppointment);
router.delete("/delete-appointment/:id", appointmentController.deleteAppointment);

module.exports = router;
