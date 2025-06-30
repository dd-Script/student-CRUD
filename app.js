const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const studentRoutes = require('./src/routes/student.routes');

require('dotenv').config();
// create an Express application
const app = express();

// middleware: parse incoming JSON bodies into req.body
app.use(express.json());

// ROUTES
app.use('/students', studentRoutes);

// === GLOBAL ERROR HANDLER ===
// Catches any thrown error and sends a JSON response
app.use((err, req, res, next) => {
  console.error('Error handler caught:', err);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on http://localhost:${PORT}`);
}); 
