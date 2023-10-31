import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
  return (
    <div>
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

// {"id":null,"rollNo":"0","name":"","physics":0,"chemistry":0,"maths":0,"studentId":1}


// create a page with input field  sutdent rollno name physic marks chemistry marks and meths marks on click of save button data shuld be post to https://api.sunilos.com/ORSP10/Marksheet/save this api   

// MarkSheetForm.js

// import React, { useState } from 'react';
// import axios from 'axios';

// function MarkSheetForm() {
//   const [rollNo, setRollNo] = useState('');
//   const [name, setName] = useState('');
//   const [physicsMarks, setPhysicsMarks] = useState('');
//   const [chemistryMarks, setChemistryMarks] = useState('');
//   const [mathMarks, setMathMarks] = useState('');

//   const handleSave = () => {
//     // Create a data object with the input values
//     const data = {
//       rollNo,
//       name,
//       physicsMarks,
//       chemistryMarks,
//       mathMarks,
//     };

//     // Send a POST request to the API using Axios
//     axios
//       .post('https://api.sunilos.com/ORSP10/Marksheet/save', data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then((response) => {
//         console.log('Data saved successfully:', response.data);
//         // You can add further actions on success
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle errors here
//       });
//   };

//   return (
//     <div>
//       <h2>Student Marksheet Form</h2>
//       <div>
//         <label>Roll Number:</label>
//         <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
//       </div>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         <label>Physics Marks:</label>
//         <input type="number" value={physicsMarks} onChange={(e) => setPhysicsMarks(e.target.value)} />
//       </div>
//       <div>
//         <label>Chemistry Marks:</label>
//         <input type="number" value={chemistryMarks} onChange={(e) => setChemistryMarks(e.target.value)} />
//       </div>
//       <div>
//         <label>Math Marks:</label>
//         <input type="number" value={mathMarks} onChange={(e) => setMathMarks(e.target.value)} />
//       </div>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

// export default MarkSheetForm;
