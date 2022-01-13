
 import React, {useState} from 'react'


 export default function TextForm(props){
     
     const [text, setText] = useState('');
     const handleUpClick =()=>{
        // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    // setText(event.target.value.toUpperCase());
        setText(newText);
       //setText(event.traget.value);
       props.showAlert("Converted to uppercase","success");
     }
     const handleLoClick =()=>{
         let oldText = text.toLowerCase();
         setText(oldText);
         props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick =()=>{
        let clear ='';
        setText(clear);
    }

     const handleOnChange = (event)=>{
        
    setText(event.target.value);
     }
     
     return(
         <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#1d195e'}} >
        <h1>{props.heading}</h1>
        
  <div className="mb-3">
    
    <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id  ="Mybox" rows="10"></textarea>
    

        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
         

    
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#1d195e'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.08 * text.split(" ").length} Minutes read</p>
        </div>

        </>
                    
     );
 }
 