import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick=()=>{
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy=()=>{
    let textBox = document.getElementById("myBox")
    textBox = textBox.value;
    navigator.clipboard.writeText(textBox);
    props.displayAlert();
  }

  const handleClearClick=()=>{
    setText("");
  }

  const handleOnChange=(event)=>{
    // console.log('handleOnChange');
    setText(event.target.value);
  }
  return (
    <>
      <div className="container mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
      <button className="btn btn-primary my-1" onClick={handleUpClick} disabled={text.trim().length === 0 ? true : false}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} disabled={text.trim().length === 0 ? true : false}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy} disabled={text.trim().length === 0 ? true : false}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick} disabled={text.trim().length === 0 ? true : false}>Clear Text</button>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.trim().split(" ").length} words, {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Type something above in the text box to show here"} </p>
      </div>
      </div>
    </>
  );
}
