import React, { useEffect, useState } from 'react'
import { useNavigate ,useParams } from "react-router-dom";
import axios from 'axios';
import './Marksheet.css';

const Markesheet = () => {
  const navigate = useNavigate();
  const [rollno,setRollNo]=useState("0")
  const [studentID,setStudentID]=useState()
  const [studentName,setSudentName]=useState('')
  const[physicsMarks,setPhysicMarks] =useState(0)
  const[chemistry,setChemistryMarks] =useState(0)
  const[MathsMarks,setMathsMarks] =useState(0 )

  function Searchbtn(){
     navigate('/marksheet-list')
  }
const HandleSaveData=(e)=>{
const data={
  "id":studentID,
  "rollNo":rollno,
  "name":studentName,
  "physics":physicsMarks,
  "chemistry":chemistry,
  "maths":MathsMarks,
  "studentId":studentID,
}
  axios.post(`https://api.sunilos.com/ORSP10/Marksheet/save`, data)
  .then((response) => {
    console.log("resp",response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
    
  });
}


const {id}=useParams()
console.log("id",id);
useEffect(()=>{

  axios.get(`https://api.sunilos.com/ORSP10/Marksheet/get/${id}`, )
  .then((response) => {
    const fatechedData=response.data.result.data
    console.log("resp",fatechedData);
  
     setStudentID(fatechedData.id)
    setRollNo(fatechedData.rollNo)
    setSudentName(fatechedData.name)
    setPhysicMarks(fatechedData.physics)
    setChemistryMarks(fatechedData.chemistry)
    setMathsMarks(fatechedData.maths)
  })
  .catch((error) => {
    console.error('Error:', error);
    
  })
},[])
  return (
    
    <div className='container'>
      <h1>Marksheet</h1>
      <label >Student ID</label>
        <input
          type="text"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
        <br /><br />
        <label >Roll No.</label>
        <input
          type="text"
          value={rollno}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <br /><br />
        <label >Name</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setSudentName(e.target.value)}
        /><br/><br/>
         <label >Physics</label>
        <input
          type="text"
          value={physicsMarks}
          onChange={(e) => setPhysicMarks(e.target.value)}
        />
        <br /><br />
        <label >Chemistry</label>
        <input
          type="text"
       value={chemistry}
       onChange={(e) => setChemistryMarks(e.target.value)}
        /><br/><br/>
        <label >Maths</label>
        <input
          type="text"
          value={MathsMarks}
          onChange={(e) => setMathsMarks(e.target.value)}
        />
        <br /><br />
        <button onClick={HandleSaveData}>Save</button>
        <button onClick={Searchbtn}>Search</button>
    </div>
  )
}

export default Markesheet

