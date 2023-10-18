import express from 'express';
import studentController from '../controller/student.js';

const route =express.Router();
route.post('/createStudent',studentController.createStudent)
route.get('/getstudenlist/:name',studentController.getStudentByMentor)
route.put('/asignmentor',studentController.asignMentor)
route.get('/prevmentor/:studentname',studentController.getmentorbystudent)
route.get('/unassign',studentController.getUnassign)
route.post('/assignstudentmentor',studentController.assignStudentMentors)
export default route