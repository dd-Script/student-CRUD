const mongoose = require('mongoose');

// Define the shape of a Student document in MongoDB
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Student must have a first name']
  },
  lastName: {
    type: String,
    required: [true, 'Student must have a last name']
  },
  email: {
    type: String,
    required: [true, 'Student must have an email'],
    unique: true // prevents two students from sharing the same email
  },
  age: {
    type: Number,
    required: [true, 'Student must have an age'],
    min: [0, 'Age must be a non-negative number']
  }
}, {
  timestamps: true, // adds createdAt and updatedAt fields automatically
  versionKey: false
});

// Create a MongoDB index on email for fast lookups & uniqueness
studentSchema.index({ email: 1 }, { unique: true });

// Export a Model based on this schema
module.exports = mongoose.model('Student', studentSchema); 
