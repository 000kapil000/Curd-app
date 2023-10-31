import React, { useState } from 'react'
import axios from 'axios'
const CollageList = () => {
  const [collageName,setCollageName]=useState("")
  const [address,setAddress]=useState("")
  const [searchedData,setSearchedData]=useState([])
  const searchButton=()=>{
    const posteddata={
      "name":collageName,
      "address":address
    }
  axios.post(`https://api.sunilos.com/ORSP10/College/search`,posteddata)
  .then((response) => {
    setSearchedData(response.data)
    console.log("resp",searchedData);
    console.log(response.result.data);
  })
  .catch((error) => {
    console.error('Error:', error);
    
  });
  }
  return (
    <div>
<h1>College List</h1>
<label >Name </label>
        <input
          type="text"
         value={collageName}
        onChange={(e)=>setCollageName(e.target.value)}
        />
        <label >Address</label>
        <input
          type="text"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
        />
     <button onClick={searchButton}>Search</button>
     <table>
      <thead>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Edit</th>
                    <th>Delete</th>
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

export default CollageList