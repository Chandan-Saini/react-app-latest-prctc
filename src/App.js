import React, { useState } from "react";
import './App.css';
import Person from './Person/Person';

const App= (props)=> {
 

const [personState, setPersonState] = useState({
  person: [
    { name: "Aman", age: 20 },
    { name: "Akku", age: 24 },
    { name: "chan", age: 22 }
  ]
})

const [otherState,setOtherState]=useState("this is other state")

 const eventHandler =()=>{
   setPersonState({
     person: [
       { name: "Aman updated again", age: 20 },
       { name: "Akku", age: 24 },
       { name: "chan", age: 90 }
     ]
   })
}
   
  console.log(personState,otherState);
    return (
      <div className="App">
        <h1>this is my first react app </h1>
        <button onClick={eventHandler}>Switch</button>
        <Person name={personState.person[0].name} age={personState.person[0].age} />
        <Person name={personState.person[1].name} age={personState.person[1].age}> this is a text</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age} />
      </div>

    );

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
}

export default App;
