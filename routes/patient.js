// routes/patient.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient');

// Define routes
router.post('/', patientController.registerPatient);
router.get('/', patientController.getAllPatients);

// Use a dynamic parameter for patientId
router.get('/:patientId', patientController.getPatientDetails);

module.exports = router;
