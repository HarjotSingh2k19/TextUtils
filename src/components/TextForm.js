import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
  };

  const handleUpChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared!","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // jahan bhi extra space hogi wahan array me daal do elements ko
    setText(newText.join(" ")); // sabhi array ke elements me ek space de do
    props.showAlert("Extra Spaces Removed!","success");
  };

  const handleReverse = () => {
   let splitWord = text.split("");
   let reverseWord = splitWord.reverse("");
   let joinedWord = reverseWord.join("");

   let newText = joinedWord;
   setText(newText);
        //  Or
  // setText(text.split("").reverse("").join(""));
  props.showAlert("Text has been reversed!","success");
  };

  const [text, setText] = useState('');
  //   text = "new text"; // wrong way to change the state

  //   setText("new Text"); // Correct way to change the state

  return (
    <>
    <div className="conatiner" style = {{color: props.mode === 'dark'?'white':'#05112dde'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style = {{backgroundColor: props.mode === 'dark'?'grey':'white', 
                    color: props.mode === 'dark'?'white':'#05112dde'}}
          onChange={handleUpChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>

      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>

      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Clear Extra Spaces
      </button>

      <button className="btn btn-primary mx-1" onClick={handleReverse}>
        Reverse Text
      </button>
    </div>

    <div className="container my-4" style = {{color: props.mode === 'dark'?'white':'#05112dde'}}>
        
        <h3>Your text Summary</h3>
        <p><i>{text.split(" ").length} words and {text.length} characters</i></p>
        <p> Average <b>{0.008 * text.split(" ").length * 60}</b> Seconds read</p>
        <hr />
        <h4>Preview</h4>
        <p>{text.length > 0? text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
  
}
