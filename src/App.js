import './App.css';
import {Route,Routes } from 'react-router-dom';
import Header from "./components/Header-Part/Header"
import Login from "./components/login/Login"
import Home from "./components/home-page/Home"
import Markesheet from "./components/marksheet-section/marksheet/Markesheet"
import MarksheetList from "./components/marksheet-section/marksheet-list/MarksheetList"
import Collage from "./components/collage-section/collage/Collage"
import CollageList from "./components/collage-section/collage-list/CollageList"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/welcome' element={<Home/>}/>
      <Route path='/marksheet' element={ <Markesheet/>}/>
      <Route path='/marksheet-list' element={ <MarksheetList/>}/>
      <Route path='/college' element={ <Collage/>}/>
      <Route path='/college-list' element={ <CollageList/>}/>
      <Route/>
    </Routes>

    </>
  );
}

export default App;
