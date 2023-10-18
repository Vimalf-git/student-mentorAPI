import express from 'express'
import mentorRouter from './mentor.js'
import studentRoute from './student.js'
const router=express.Router();

router.use('/mentor',mentorRouter )
router.use('/student',studentRoute)
export default router;