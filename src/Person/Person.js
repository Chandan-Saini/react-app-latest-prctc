import React from "react"
import "./Person.css"
import Radium from "radium";
const person=(props)=>{
  const style={
  '@media (min-width:700px)':{
     width:"600px"
  }
  }  
  return (
  <div className="Person" style={style}>
    <h3 onClick={props.click}> My name is {props.name} and age is {props.age}</h3>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} /> {/* this is the usage of two way binding*/}
  </div>    )
}

export default Radium(person)