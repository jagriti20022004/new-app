import React from 'react'
import  { useState } from 'react';
export default function textform(props)
{
    const[text,setText]=useState('');
    //text=setText("apna email daalo "); //correct
    //text="email daalo";  incorrect
const handleUpClick=()=>
{
    console.log("UPPER case clicked");
    let newtext=text.toUpperCase();
    setText(newtext);

}
const handlesm=()=>
    {
        console.log("lower case clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
    
    }
const handleOnChange=(event)=>
    {
        console.log("on change ");
      setText(event.target.value);
    
    }
    const handleBlur = () => {
        if (text && !text.endsWith('@gmail.com')) {
          setText(text + '@gmail.com');
          console.log("function worked ");
        }
      };
    
    
    
  return (
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" style={{color:props.mode==='light'?'black':'white'}}>Email address-{text}</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  value={text}  onBlur={handleBlur} onChange={handleOnChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">{props.message}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:props.mode==='light'?'black':'white'}}>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1" style={{color:props.mode==='light'?'black':'white'}}>Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPER-CASE</button>
  <button className="btn btn-primary mx-1 my-1"  onClick={handlesm}>Convert to lower-case</button>
</form>
<div className="container">
    <h1>Text summary is here</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p> reading time is {text.split(" ").filter((element)=>{return element.length!=0}).length*0.008} minutes</p>
    <h2>Preview is ::</h2>
    <p>{text.length>0?text:"enter some text to preview"}</p>
</div>
</>

  )
}
