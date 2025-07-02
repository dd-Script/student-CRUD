const express = require('express');
const router = express.Router();
const controller = require('../controller/student.controller');

// Routes for Student Operations
router.get('/', controller.getAllStudents);
router.post('/create', controller.createStudent);
router.get('/count', controller.countStudents);
router.put('/update/:id', controller.updateStudentById);
router.delete('/delete/:id', controller.deleteStudentById);

module.exports = router;
