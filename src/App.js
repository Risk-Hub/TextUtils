import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert,setAlert] = useState("hidden");
  const [modes,setModes] = useState({
    clas: "navbar navbar-expand-lg",
    styl: "#E3F2FD",
    bg: "#cdeafc",
    image: "",
  });

  const toggleMode=()=>{
    if(modes.clas === "navbar navbar-expand-lg"){
    setModes({
      clas: "navbar navbar-expand-lg navbar-dark bg-dark",
      styl: "",
      bg: "#cdeafc",
      image: "invert(1)",
    })
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    }
    else{
      setModes({
        clas: "navbar navbar-expand-lg",
        styl: "#E3F2FD",
        bg: "#cdeafc",
        image: "invert(0)",
      })
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }

  }

  const displayAlert=()=>{
    setAlert("visible")
    setTimeout(() => {
      setAlert("hidden")
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} modes={modes}/>
        <Routes>
          <Route exact path="/" element={<><Alert alert={alert} /><TextForm heading="Enter your text below" displayAlert={displayAlert}/></>}/>
          <Route exact path="/about" element={<About modes={modes}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
