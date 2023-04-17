import React, {useState} from 'react'
import './TextForm.css'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower Case","success");
    }
    //credit Himanshu Maurya
    const handleReverseClick=()=>{
        // setText(text.reverse());
        let stringsplit = text.split("");
        stringsplit.reverse();
        setText(stringsplit.join(""));
        props.showAlert("Successfully reversed","success");
    }
    const handleClearClick=() =>{
        props.showAlert("Cleared","success");
        setText("");
    }

    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Sucessfully on Clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed successfully","success");
    }
    // creadit self and Abhishek 
    const handleCapatilize = ()=>{
        let newText = text.split(" ");
        let newStr="";
        newText.forEach(i => {
            newStr += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()+" ";
        }); 
        setText(newStr);
        props.showAlert("Converted to Capitalize","success");
    }

    const [text,setText] = useState('');
    // setText("new Text");
  return (
    <>
    <div style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} placeholder="Enter text here" onChange ={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}  id = "myBox" rows = "15"></textarea>
        </div>
        {/* All buttons here */}
        <div id='buttons' className=' d-flex flex-wrap justify-content-center'>
            <button className="btn btn-primary fd-vertical" onClick={handleUpClick}>Convert to Upper Case</button>

            <button className="btn btn-danger fd-vertical" onClick={handleLowClick}>Convert to Lower Case</button>

            <button className="btn btn-warning" onClick={handleClearClick}>Click here to clear</button>

            <button className="btn btn-primary" onClick={handleCopy}>Click here to Copy text</button>

            <button className="btn btn-danger" onClick={handleExtraSpaces}>Handling Extra spaces</button>

            <button className="btn btn-success" onClick={handleReverseClick}>Click here to Reverse it</button>
            
            <button className="btn btn-info" onClick={handleCapatilize}>Click here to Capitalize the word</button>

        </div>
    </div>

    {/* Downwards content */}
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p><b>{text.split(" ").length} words, {text.length} character.</b></p>
        <p><b>{0.008 *text.split(" ").length} Minutes to read</b></p>
        <h2>Preview</h2>
        <p>{text===""?"Enter something in the text box above to preview it here":text}</p>
    </div>
    </>
  )
}