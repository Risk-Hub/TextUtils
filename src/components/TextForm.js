import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick=()=>{
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    // console.log('handleOnChange');
    setText(event.target.value);
  }
  return (
    <>
      <div className="mb-3 my-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </>
  );
}
