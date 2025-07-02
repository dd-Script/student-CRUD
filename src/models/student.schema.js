const mongoose = require('mongoose');

// Student Schema 
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
    unique: true 
  },
  age: {
    type: Number,
    required: [true, 'Student must have an age'],
    min: [0, 'Age must be a non-negative number']
  }
}, {
  timestamps: true, 
  versionKey: false
});


studentSchema.index({ email: 1 }, { unique: true });


module.exports = mongoose.model('Student', studentSchema); 
