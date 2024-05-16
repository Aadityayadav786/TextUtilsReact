import React , {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClrClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event)=>{
    // console.log("Onchange");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  
  // setText("new text")


  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
     
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>    
        <button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
    </div>

    <div className="conatiner my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

    
  )
  
}
