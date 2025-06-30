const Student = require('../models/student.schema');

// Create a new student
exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    return res.status(201).json({
      message: "Student created successfully!",
      student: newStudent
    });
  } catch (error) {
    // Handle duplicate-email error
    if (error.code === 11000) {
      error.statusCode = 409;       // Conflict
      error.message = 'Email already in use';
    }
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      error.statusCode = 400;       // Bad Request
    }
    next(error); // forward to global error handler
  }
};

// Read (list) students, optionally paginated or filtered
exports.getAllStudents = async (req, res, next) => {
  try {
    // support ?page= & limit=  & lastName=Smith
    const page     = parseInt(req.query.page)  || 1;
    const limit    = parseInt(req.query.limit) || 0;
    const lastName = req.query.lastName;

    // build filter only if lastName is provided
    const filter = lastName ? { lastName } : {};

    const students = await Student
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(students);
  } catch (error) {
    next(error);
  }
};

// Update an existing student by ID
exports.updateStudentById = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    return res.status(200).json({ 
      message: 'Student updated successfully!', 
      student: updatedStudent 
    });
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
      error.message = 'Email already in use';
    }
    if (error.name === 'ValidationError') {
      error.statusCode = 400;
    }
    next(error);
  }
};

// Delete a student by ID
exports.deleteStudentById = async (req, res, next) => {
  try {
    const removedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!removedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted', id: removedStudent._id });
  } catch (error) {
    next(error);
  }
};

// Get total count of students
exports.countStudents = async (_req, res, next) => {
  try {
    const total = await Student.countDocuments();
    res.json({ count: total });
  } catch (error) {
    next(error);
  }
};
