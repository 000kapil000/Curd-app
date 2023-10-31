import React, { useEffect, useState } from 'react'
import axios from 'axios'
const MarksheetList = () => {
const [rollNo,setRollNo]=useState("")
const [studentName,setStudentName]=useState("")
const [searchedData,setSearchedData]=useState()
// const [apiData,setApiData]=useState([]  )

// console.log("post",apiData);
const  searchButton=()=>{
  const posteddata={
    "rollNo":rollNo,
  "name":studentName}
axios.post(`https://api.sunilos.com/ORSP10/Marksheet/search`,posteddata)
.then((response) => {
  // const responded=response.data.data
  setSearchedData(response.data)
  console.log("resp",searchedData);
  console.log(response.data);
})
.catch((error) => {
  console.error('Error:', error);
  
});
}

// useEffect(() => {
// axios.get(`	https://api.sunilos.com/ORSP10/Marksheet/delete`).then((response) => {
//   setApiData(response.data);
// }).catch((error)=>{
//   console.log("error",error);
// })
  
  // },[])


  // const MarksheetDeleted=(id)=>{
  //   axios.get(`	https://api.sunilos.com/ORSP10/Marksheet/delete${id}`).then((response) => {
  //     setApiData(response.data);
  //   }).catch((error)=>{
  //     console.log("error",error);
  //   })
// }
  return (
    <div>
      <h1>Marksheet List</h1>
  <label >Roll No.</label>
        <input
          type="text"
         value={rollNo}
        onChange={(e)=>setRollNo(e.target.value)}
        />
        <label >Name</label>
        <input
          type="text"
           value={studentName}
           onChange={(e) => setStudentName(e.target.value)}
        />
     <button onClick={searchButton}>Search</button>
     <table>
      <thead>

                <tr>
                    <th>ID</th>
                    <th>Roll NO</th>
                    <th>Name</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Maths</th>
                    <th>Edit</th>
                    {/* <th onClick={()=>MarksheetDeleted()}>Delete</th> */}
                </tr>
      </thead>
                {/* {searchedData.map((val, key) => (
                  <tbody>

                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.rollNo}</td>
                            <td>{val.name}</td>
                            <td>{val.physics}</td>
                            <td>{val.chemistry}</td>
                            <td>{val.maths}</td>
                            <td>edit</td>
                            <td>delete</td>
                          
                        </tr>
                  </tbody>
               
                ))} */}
            </table>
    </div>
  )
}

export default MarksheetList