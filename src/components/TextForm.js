import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to UpperCase","success");
  }

  const handleOrchange = (event) => {
    setText(event.target.value);
  }

  const handleLoclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to LowerCase","success");
  }

  const handleclearclick = () => {
    let newtext = ('');
    setText(newtext);
    props.showAlert("Text Cleared","success");
  }

  const handlecopy = () =>{
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copy","success");

  }

  const handleExtaSpace = () =>{
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Space","success");
  }

  // setText('Hello Set text');
  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" id="mybox" value={text} onChange={handleOrchange} style={{background: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#02033e'}} rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Conver to Upercase</button>
        <button className="btn btn-primary  mx-2" onClick={handleLoclick}>Conver to Lowercase</button>
        <button className="btn btn-primary  mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary  mx-2" onClick={handleExtaSpace}>Remove Extra Space</button>
        <button className="btn btn-primary  mx-2" onClick={handleclearclick}>Clear</button>


      </div>
      <div className="container my-3">
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>Your text summary</h2>
        <p style={{color: props.mode==='dark'?'white':'black'}} >{text.split(" ").length} Words and  {text.length} Characters</p>
        <p style={{color: props.mode==='dark'?'white':'black'}} >{0.008*text.split(" ").length} Minutes read</p>
        <h2 style={{color: props.mode==='dark'?'white':'black'}} >Preview</h2>
        <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter Something Preview here"}</p>
      </div>
    </>
  );
}
