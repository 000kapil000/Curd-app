import React, { useState ,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
const Collage = () => {
  const navigate = useNavigate();
 const[collageName,setCollageName]=useState("")
const [address,setAddress]=useState('')
const [phoneNo,setphoneNo] =useState()
const [City,setCity]=useState()
const [state,setState]=useState()
const [collageID,setCollageID]=useState()
  function Searchbtn(){
     navigate('/college-list')
  }
const HandleSaveData=(e)=>{
const data={
"id":collageID,
"name":collageName 
,"address":address,
"state":state,
"city":City,
"phoneNo":phoneNo
}
  axios.post(`https://api.sunilos.com/ORSP10/College/save`, data)
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
  
    axios.get(`https://api.sunilos.com/ORSP10/College/get/${id}`, )
    .then((response) => {
      const fatechedData=response.data.result.data
      console.log("resp",fatechedData);
     setCollageName(fatechedData.name)
     setAddress(fatechedData.address)
     setState(fatechedData.state)
     setCity(fatechedData.city)
     setphoneNo(fatechedData.phoneNo)
     setCollageID(fatechedData.id)
    })
    .catch((error) => {
      console.error('Error:', error);
      
    })
  },[])
  
  return (
    <div>
    <h1>Collage</h1>
    <label >Name(*)</label>
      <input
        type="text"
        value={collageName}
        onChange={(e) => setCollageName(e.target.value)}
      />
      <br /><br />
      <label >Address*</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br /><br />
      <label >Phone No* (10 digit)</label>
      <input
        type="text"
        value={phoneNo}
        onChange={(e) => setphoneNo(e.target.value)}
      /><br/><br/>
       <label >City*</label>
      <input
        type="text"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /><br />
      <label >State*</label>
      <input
        type="text"
     value={state}
     onChange={(e) => setState(e.target.value)}
      />
      <button onClick={HandleSaveData}>Save</button>
      <button onClick={Searchbtn}>Search</button>
  </div>
  )
}

export default Collage