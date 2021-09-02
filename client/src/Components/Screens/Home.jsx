import React, { useState, useEffect} from "react";

import axios from "axios";
import Students from './Students'



const Home = () => {
  const [loading ] = useState(false)
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



  return (
    <div>
        <Students  loading={loading} /> 
    </div>
  );
};

export default Home;
