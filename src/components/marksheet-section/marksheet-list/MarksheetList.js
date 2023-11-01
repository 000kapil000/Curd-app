import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
const MarksheetList = () => {
  const [rollNo, setRollNo] = useState("")
  const [studentName, setStudentName] = useState("")
  const [searchedData, setSearchedData] = useState()
console.log("searched",searchedData);
  const navigate = useNavigate()

  const searchButton = () => {
    const posteddata = {
      "rollNo": rollNo,
      "name": studentName
    }
    axios.post(`https://api.sunilos.com/ORSP10/Marksheet/search`, posteddata)
      .then((response) => {
        setSearchedData(response.data.result.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function editedData(id) {
    navigate(`/marksheet/${id}`)
  }

  
  const MarksheetDeleted = (key) => {
    axios.get(`	https://api.sunilos.com/ORSP10/Marksheet/delete/${key}`).then((response) => {
      setSearchedData(searchedData.filter(item => item.key !== key))
    }).catch((error) => {
      console.log("error", error);
    })
  }

  return (
    <div>
      <h1>Marksheet List</h1>
      <label >Roll No.</label>
      <input
        type="text"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
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
            <th>Delete</th>
          </tr>
        </thead>
        {searchedData?.map((val, key) => (
          <tbody>

            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.rollNo}</td>
              <td>{val.name}</td>
              <td>{val.physics}</td>
              <td>{val.chemistry}</td>
              <td>{val.maths}</td>
              <button onClick={() => editedData(val.id)} >edit</button>
              <button onClick={() => MarksheetDeleted(val.key)}>Delete</button>

            </tr>
          </tbody>

        ))}
      </table>
    </div>
  )
}

export default MarksheetList

// Eod status=> working on curdapp app compleate login page and fetch api post data fron marksheet page or collage page and render data in list page also now  