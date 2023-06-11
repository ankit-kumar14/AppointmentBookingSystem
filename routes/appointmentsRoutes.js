const express = require('express');
const router = express.Router();
const authenticate = require('../utils/authentication');
const {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
} = require('../controllers/appointmentsController');

//Authenticated Routes
router.get('/', authenticate, getAllAppointments);
router.post('/', authenticate, createAppointment);
router.get('/:id', authenticate, getAppointmentById);
router.put('/:id', authenticate, updateAppointmentById);
router.delete('/:id', authenticate, deleteAppointmentById);

// Non Authenticated Routes
// router.get('/', getAllAppointments);
// router.post('/', createAppointment);
// router.get('/:id', getAppointmentById);
// router.put('/:id', updateAppointmentById);
// router.delete('/:id', deleteAppointmentById);

module.exports = router;
