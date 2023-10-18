import mentorModel from "../model/mentor.js"

const createMentor=async(req,res)=>{ 
    try {
       const batchPercent= await mentorModel.findOne({batch:req.body.batch});
       if(!batchPercent){

        // if(!batchPercent.mentorname){
            
        await mentorModel.create(req.body)
        res.send({message:'successfully created'})    
    // }else{
    //     let{mentorname,email,role,batch}=req.body
    //     batchPercent.mentorname=mentorname?mentorname:batchPercent.mentorname;
    //     batchPercent.email=email?email:batchPercent.email;
    //     batchPercent.role=role?role:batchPercent.role;
    //     batchPercent.batch=[...batchPercent.batch,batch];
    //     batchPercent.save()
    //     res.status(200).send({message:'user exist so data updated'})
    // }
       }else{
        res.status(200).send({message:'batch taken by someone'})    
       }
      
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}





export default {createMentor}