import studentModel from "../model/student.js"
const createStudent = async (req, res) => {
    try {
        await studentModel.create(req.body);
        res.status(201).send({ message: 'student data created' })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getStudentByMentor = async (req, res) => {
    // console.log(req);
    const studentList = await studentModel.find({ mentorname: req.params.name })
    //    console.log(studentList);
    // const studentData= 
    // console.log(typeof(studentList));
    // const studentData=studentList.
    res.send({
        message: 'successfully fetched',
        mentor: studentList
    })
}

const asignMentor = async (req, res) => {
    try {
        console.log("ih");
        let studentList = await studentModel.findOne({ studentname: req.body.studentname })
        if (studentList) {
            let prevMentor =
            studentList.previousmentorname?[...studentList.previousmentorname,studentList.mentorname]
             :studentList.mentorname;
            let { studentname, email, batch, mentorname } = req.body
            console.log(mentorname);

            studentList.studentname = studentname ? studentname : studentList.studentname;
            studentList.email = email ? email : studentList.email;
            studentList.batch = batch ? batch : studentList.batch;
            studentList.mentorname = mentorname?mentorname:studentList.mentorname;
            studentList.previousmentorname = prevMentor;

            await studentList.save()
            res.status(200).send({ message: 'updated successfully' })
        } else {
            res.status(400).send({ message: 'student is not exists' })

        }

    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}
export default { createStudent, getStudentByMentor, asignMentor }