import React from "react"

const person=(props)=>{
    return (
  <div>
    <h3 onClick={props.click}> My name is {props.name} and age is {props.age}</h3>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} /> {/* this is the usage of two way binding*/}
  </div>    )
}

export default person