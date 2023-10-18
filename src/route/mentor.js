import express from 'express';
import mentorController from '../controller/mentor.js'
const route=express.Router();
route.post('/creatementor',mentorController.createMentor)


export default route;