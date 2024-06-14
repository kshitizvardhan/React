import React, { Suspense } from "react"
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

// So here all the code for all 2 pages is sent together...but what if only the code for which the user is on is only sent
// For optimizing the website and reducing the bundle size..
// For this here comes lazy loading...through which we can import the component only when the user requests it and still having a
// client side route but a optimized one and not a hard reload.
// For this to happen you need to change the way we exported the component.

// import Dashboard from "./components/Dashboard"
// import Landing from "./components/Landing"

const Dashboard = React.lazy( ()=> import("./components/Dashboard") );
const Landing = React.lazy( ()=> import("./components/Landing") );

// Now you need to wrap your component around suspense component
// As your component will be fetched asynchronously
// Suspense API - asynchronous component/data fetching

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navigation/>     {/* This component must always be inside the browser router component to work the client side rendering */}
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
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
