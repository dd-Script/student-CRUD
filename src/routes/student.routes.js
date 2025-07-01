const express = require('express');
const router = express.Router();
const controller = require('../controller/student.controller');

// POST   /students       → create a student
// GET    /students       → list students
router.get('/', controller.getAllStudents);
router.post('/create', controller.createStudent);
// GET    /students/count → total number of students
router.get('/count', controller.countStudents);

// PUT    /students/:id   → update one student
// DELETE /students/:id   → delete one student
router.put('/update/:id', controller.updateStudentById);
router.delete('/delete/:id', controller.deleteStudentById);

module.exports = router;
