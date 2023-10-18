import express from 'express';
import studentController from '../controller/student.js';

const route =express.Router();
route.post('/createStudent',studentController.createStudent)
route.get('/getstudenlist/:name',studentController.getStudentByMentor)
route.put('/asignmentor',studentController.asignMentor)
export default route