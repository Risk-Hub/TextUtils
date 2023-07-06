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
      <div className="mb-3 my-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.trim().split(" ").length} words, {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Type something above in the text box to show here"} </p>
      </div>
    </>
  );
}
