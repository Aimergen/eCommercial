import React from "react";
import Login from "./components/Login";
import NavBarFirst from "./components/NavBarFirst";
import {Route, Routes} from 'react-router-dom';
 

function App() {
  return <>
  <Routes>
    <Route path="/" element={<NavBarFirst/>}/>
    <Route path="/login" element={<Login />} />
  </Routes>
  
  </>
}

export default App;
