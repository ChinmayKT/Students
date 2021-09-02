import React , {useState , useEffect}from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Students = ({  loading }) => {
    const [student, setStudent] = useState([]);
  const [token, setToken] = useState("");

  const getStudents = async (token) => {
    const res = await axios.get("/api/students", {
      headers: { Authorization: token },
    });
 
    setStudent(res.data); 
  };


useEffect(() => {
  const token = localStorage.getItem("tokenStore");

  setToken(token);
  if (token) {
    getStudents(token);
  }
}, []);

const deleteStudent = async (id) => {
  console.log(id);
  let x = window.confirm("Are you sure to delete this Student?");
  if (x) {
    try {
      if (token) {
        console.log("inside try delete memory", token);
        await axios.delete(`/api/students/${id}`, {
          headers: { Authorization: token },
        });
        getStudents(token);
        console.log(id, "deleted");
        alert("student Will be Deleted");
        window.location.href = '/';
      }
    } catch (error) {
    
      window.location.href = '/';
    }
  } else {
    alert("Action canceled");
  }
};

 
  return (
    <div>
      <div className="note-wrapper">
        {student.map((student) => (
          <div className="card" key={student._id}>
            <h4>
              Roll NO : {student.rollNo} || Name : {student.name} || Address :{" "}
              {student.address}
              || Phone Number :{student.phoneNo} || Email : {student.email}
              ||{" "}
              <Link to={`edit/${student._id}`} className="edit">
                {" "}
                Edit
              </Link>{" "}
              ||{" "}
              <Link
                className="delete"
                onClick={() => deleteStudent(student._id)}
              >
                {" "}
                DELETE{" "}
              </Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
