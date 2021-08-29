import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpclick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoclick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };

  const handleClearclick = () => {
    setText('');
  };
  
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/ +(?= )/g,'');
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert To Lowercase
        </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>  
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
