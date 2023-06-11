const Appointment = require("../models/appointmentModel");
const fireStore = require("../db").firestore();
const getAllAppointments = async (req, res) => {
  try {
    const fetchAllData = await fireStore.collection("Appointment").get();
    const appointments = fetchAllData.docs.map((doc) => doc.data());
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve appointments" });
  }
};

const createAppointment = async (req, res) => {
  try {
    const data = req.body;
    const insertData = {
      date: data.date,
      time: data.time,
      patientEmail: data.patientEmail,
      patientName: data.patientName,
      docUtc: new Date().toISOString(),
      modifiedUtc: 0,
      mobileNumber: data.mobileNumber,
      status: "pending"
    };
    const appointmentRef = await fireStore.collection("Appointment").add(insertData);
    const appointmentId = appointmentRef.id;
    res.status(200).json({ message: "Appointment created successfully", appointmentId });
  } catch (error) {
    res.status(500).json({ message: "Unable to book an appointment", error: error });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const id = req.params.id;
    const fetchData = await fireStore.collection("Appointment").doc(id).get();
    if (!fetchData.exists) {
      res.status(404).json({ message: "Appointment not found" });
    } else {
      const appointment = fetchData.data();
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve appointment" });
  }
};

const updateAppointmentById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    data.modifiedUtc = new Date().toISOString();
    await fireStore.collection("Appointment").doc(id).update(data);
    res.status(200).json({ message: "Appointment updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to update appointment" });
  }
};

const deleteAppointmentById = async (req, res) => {
  try {
    const id = req.params.id;
    await fireStore.collection("Appointment").doc(id).delete();
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete appointment" });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
};
