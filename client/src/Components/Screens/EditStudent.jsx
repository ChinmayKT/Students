import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const EditStudent = ({match}) => {

    const [student ,setStudent] = useState({
        rollNo :'',
        name:'',
        address : '',
        phoneNo:'',
        email : ''
    })

    const history =  useHistory()

    useEffect(()=>{
        const getStudent = async () => {
            const token = localStorage.getItem('tokenStore')
        
            if(match.params.id){
                const res= await axios.get(`/api/students/${match.params.id}` , {
                    headers: {Authorization : token}
                })

              

                const Data = res.data.stu

                setStudent({ 
                    rollNo : Data.rollNo, 
                    name : Data.name,
                    address: Data.address,
                    phoneNo : Data.phoneNo,
                    email : Data.email

                })
            }
        }
        getStudent()
    },[match.params.id])

    const onChangeInput =  (e) => {
        const {name , value} = e.target;
        setStudent({...student , [name]: value})
    }

    const editStudent = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
         
            if(token){
                const {rollNo , name , address , phoneNo , email , id} = student;
                const newStudent = {
                    rollNo , name , address , phoneNo , email
                }
              
                await axios.put(`/api/students/${match.params.id}`, newStudent , {
                    headers : {Authorization:token}
                })
             

                return history.push('/')
      
            }
        } catch (err) {
            // window.location.href = '/';
            console.log(err)
        }
    }



    return (
        <div className="create-note" >
            <h2>Edit Student</h2>
            <form onSubmit={editStudent} autoComplete ="off"  >
            <div className="row" >
               
                    <input type="number" value={student.rollNo} id="rollno" placeholder="Roll No"
                    name = "rollNo" required onChange = {onChangeInput}   />
                </div>

                <div className="row" >
                   
                    <input type="text" value={student.name} id="name" placeholder="Name"
                    name = "name" required onChange = {onChangeInput}   />
                </div>

                <div className="row" >
                    
                    <input type="text" value={student.address} id="address" placeholder="Address"
                    name = "address" required onChange = {onChangeInput}   />
                </div>

                <div className="row" >
                   
                    <input type="number" value={student.phoneNo} id="number" placeholder="Phone Number"
                    name = "phoneNo" required onChange={onChangeInput}/>
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

export default EditStudent
