// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    contact: String,
    relationship: String,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
