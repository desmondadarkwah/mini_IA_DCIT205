const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patient');

const app = express();
const port = 3000;

// Middleware function
const myMiddleware = (req, res, next) => {
  // Your middleware logic here
  next();
};

// Use middleware
app.use(myMiddleware);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/emr-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express middleware to parse JSON
app.use(express.json());

// Use patient routes
app.use('/api/patients', patientRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Electronic Medical Record System');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
