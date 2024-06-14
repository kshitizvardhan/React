import React from "react"
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navigation/>     {/* This component must always be inside the browser router component to work the client side rendering */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{display: "flex"}}>
        Hi this is top-bar
        
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
        <button onClick={()=>{navigate("/")}}>Landing</button>
        
      </div>
    </div>
  )
}

export default App
