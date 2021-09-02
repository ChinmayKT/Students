const Student = require('../models/studentModel')

const studentController = { 
    getStudents : async  (req,res)=> {
        try {
            const student = await Student.find({user_id: req.user.id })
         
            res.json(student)
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }
    },

    createStudent : async  (req,res)=> {
        try {

            console.log(req.user.id)
            const {rollNo , name , address ,phoneNo, email } = req.body   
            
            const newStudent = new Student({
                rollNo ,
                name,
                address,
                phoneNo,
                email,
                user_id : req.user.id, 
                username : req.user.name
            })
            
          console.log("new",newStudent)
          s =  await newStudent.save()
       
          console.log("s",s)

            res.json({name: req.user.name, student : newStudent, msg:'student added'})
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({msg : error.message})
        }

    }, 

    deleteStudent : async  (req,res)=> {
        try {
            await Student.findByIdAndDelete(req.params.id)
            res.json({msg : "Student Deleted"})      
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }
    },

    updateStudent : async  (req,res)=> {
        try {
            const {rollNo , name , address ,phoneNo, email} = req.body
          
          const s =  await Student.findOneAndUpdate({_id:req.params.id},{
                rollNo ,
                name,
                address,
                phoneNo,
                email,
            })
          
            res.json({msg:"student updated"})
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }
    }
    , 

    getStudent : async  (req,res)=> {
        try {
            const student = await Student.findById(req.params.id)
            res.json({stu:student })
            
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }
    }

}


module.exports = studentController