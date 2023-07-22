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

  const [clas,setClas] = useState("navbar navbar-expand-lg");
  const [styl,setStyl] = useState("#E3F2FD");
  const [bg,setBg] = useState("#cdeafc");
  const [image,setImage] = useState();
  const [alert,setAlert] = useState("hidden");

  const toggleMode=()=>{
    if(clas === "navbar navbar-expand-lg"){
      setClas("navbar navbar-expand-lg navbar-dark bg-dark")
      setStyl()
      setImage({filter: "invert(1)"})
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      setBg("#212529")
    }
    else{
      setClas("navbar navbar-expand-lg")
      setStyl("#E3F2FD")
      setImage({filter: "invert(0)"})
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      setBg("#cdeafc")
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
      <Navbar title="TextUtils" clas={clas} styl={styl} image={image} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<><Alert alert={alert} /><TextForm heading="Enter your text below" displayAlert={displayAlert}/></>}/>
          <Route exact path="/about" element={<About bg={bg} image={image}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
