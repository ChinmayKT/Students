import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const CreateStudent = () => {

    const [student ,setStudent] = useState({
        rollNo :'',
        name:'',
        address : '',
        phoneNo:'',
        email : ''
    })

    const history =  useHistory()

    const onChangeInput =  (e) => {
        const {name , value} = e.target;
        setStudent({...student , [name]: value})
    }

    const createStudent = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {rollNo , name , address ,phoneNo, email } = student;
              
                const newStudent = {
                    rollNo , name , address ,phoneNo, email
                }
               console.log(newStudent)
               const s  =  await axios.post('/api/students', newStudent , {
                    headers : {Authorization:token}
                })

              console.log(s)

                return history.push('/')
              
            }
        } catch (err) {
            // window.location.href = '/';
            console.log(err.message)
        }
    }



    return (
        <div className="create-note" >
            <h2>Add Student</h2>
            <form onSubmit={createStudent} autoComplete ="off"  >
                <div className="row" >
                    
                    <input type="number" value={student.rollNo} id="rollno" placeholder="Roll No"
                    name = "rollNo" required onChange = {onChangeInput} maxlength = "36"  />
                </div>

                <div className="row" >
                    
                    <input type="text" value={student.name} id="name" placeholder="Name"
                    name = "name" required onChange = {onChangeInput} maxlength = "36"  />
                </div>

                <div className="row" >
                   
                    <input type="text" value={student.address} id="address" placeholder="Address"
                    name = "address" required onChange = {onChangeInput} maxlength = "36"  />
                </div>

                <div className="row" >
                 
                    <input type="number" value={student.phoneNo} id="number" placeholder="Phone Number"
                    name = "phoneNo" required row="10" onChange={onChangeInput}/>
                </div>

                <div className="row" >
                 
                    <input type="email" value={student.email} id="email" placeholder="Email"
                    name = "email" required onChange = {onChangeInput} />
                </div>

                <button  type="submit" >Save</button>
            </form>
            
        </div>
    )
}

export default CreateStudent
