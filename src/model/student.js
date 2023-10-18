import mongoose from "./index.js ";


const studentSchema= new mongoose.Schema({
studentname:{type:String,required:[true,'student name is required']},
email:{type:String,required:[true,'email is required']},
batch:{type:String,required:[true,'batch is required']},
mentorname:{type:String,required:[true,'mentor name is required']},
previousmentorname:{type:Array}
},{
    versionKey:false
})

const studentModel=mongoose.model('studentData',studentSchema);

export default studentModel;