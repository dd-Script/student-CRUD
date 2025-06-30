const express = require('express');
const router = express.Router();
const controller = require('../controller/student.controller');

// POST   /students       → create a student
// GET    /students       → list students
router
  .route('/')
  .post(controller.createStudent)
  .get(controller.getAllStudents);

// GET    /students/count → total number of students
router
  .route('/count')
  .get(controller.countStudents);

// PUT    /students/:id   → update one student
// DELETE /students/:id   → delete one student
router
  .route('/:id')
  .put(controller.updateStudentById)
  .delete(controller.deleteStudentById);

module.exports = router;
