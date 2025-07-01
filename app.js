const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const studentRoutes = require('./src/routes/student.routes');

require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Welcome To My Home Page!');
})

app.use('/students', studentRoutes);

// GLOBAL ERROR HANDLER
// Catches any thrown error and sends a JSON response
app.use((err, req, res, next) => {
  console.error('Error handler caught:', err);
  res
    .status(err.statusCode || 500)
    .json({ error: err.message || 'Internal Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on http://localhost:${PORT}`);
}); 
