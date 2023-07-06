import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'

function App() {

  const [clas,setClas] = useState("navbar navbar-expand-lg");
  const [styl,setStyl] = useState("#E3F2FD");
  const [image,setImage] = useState();
  const toggleMode=()=>{
    if(clas === "navbar navbar-expand-lg"){
      setClas("navbar navbar-expand-lg navbar-dark bg-dark")
      setStyl()
      setImage({filter: "invert(1)"})
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }
    else{
      setClas("navbar navbar-expand-lg")
      setStyl("#E3F2FD")
      setImage({filter: "invert(0)"})
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }

  return (
    <>
      <Navbar title="TextUtils" clas={clas} styl={styl} image={image} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter your text below"/>
      </div>
    </>
  );
}

export default App;
