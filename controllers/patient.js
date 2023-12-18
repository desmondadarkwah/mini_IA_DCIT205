// controllers/patient.js
const Patient = require('../models');

const registerPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.json({ patientId: patient._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPatientDetails = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerPatient,
  getAllPatients,
  getPatientDetails,
};
