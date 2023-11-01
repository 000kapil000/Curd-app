import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CollageList = () => {
  const [collageName, setCollageName] = useState("")
  const [address, setAddress] = useState("")
  const [searchedData, setSearchedData] = useState([])

  const navigate = useNavigate()
  const searchButton = () => {
    const posteddata = {
      "name": collageName,
      "address": address
    }
    axios.post(`https://api.sunilos.com/ORSP10/College/search`, posteddata)
      .then((response) => {
        setSearchedData(response.data.result.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const collageEdit = (id) => {
    navigate(`/college/${id}`)
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
      <h1>College List</h1>
      <label >Name </label>
      <input
        type="text"
        value={collageName}
        onChange={(e) => setCollageName(e.target.value)}
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
        {searchedData?.map((val, key) => (
          <tbody>

            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.address}</td>
              <td>{val.phoneNo}</td>
              <td>{val.city}</td>
              <td>{val.state}</td>
              <button onClick={() => collageEdit(val.id)}>Edit</button>
              <button onClick={() => MarksheetDeleted(val.key)}>Delete</button>

            </tr>
          </tbody>

        ))}


      </table>
    </div>
  )
}

export default CollageList

