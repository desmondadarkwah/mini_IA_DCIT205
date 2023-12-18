# Electronic Medical Record System
## Overview
This project is an Electronic Medical Record System for the University of Ghana Medical Center (UGMC), allowing for patient management and medical encounter tracking.

## Technologies
1.Backend: Node.js with Express
2.Database: MongoDB
3.Frontend: [Frontend System]
4.API Documentation: [API Documentation]

## Getting Started
### Install dependencies:
npm install

### Start the server:
node index.js

### Access the API at http://localhost:3000/api/patients.

## API Endpoints
### 1. Patient Registration:
POST/api/patients
Request Body Example:
{"ID": "12345", "surname": "Doe", "otherNames": "John", ...}

### 2.Start Encounter:
### POST /api/patients/:patientId/encounter
Request Body Example:
{"date": "2023-12-18", "time": "10:30 AM", "encounterType": "OPD"}

### 3.Submit Vitals:
### POST /api/patients/:patientId/vitals
Request Body Example:
{"bloodPressure": "120/80", "temperature": "98.6", ...}

### 4. View List of Patients:
GET /api/patients

### 5. View Patient Details:
GET /api/patients/:patientId

## Contributors
[Desmond Adarkwa]
Feel free to contribute or report issues!

[Frontend System]: # # Add the link to your frontend system documentation or repository.
[API Documentation]: # # Add the link to your API documentation.

