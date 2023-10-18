import mentorModel from "../model/mentor.js"

const createMentor=async(req,res)=>{ 
    try {
        await mentorModel.create(req.body)
        res.send({message:'successfully created'})    
    } catch (error) {
        console.log(error);
    }
}





export default {createMentor}