import React, { Component } from "react";
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    person:[
    {name:"Aman",age:20},
    {name:"Akku",age:24},
    {name:"chan",age:22}
  ],
  otherState:'some other state',
  showPersons:false
}

eventHandler=(newName)=>{
   this.setState({
     person: [
       { name: newName, age: 20 },
       { name: "Akku", age: 24 },
       { name: "chan", age: 90 }
     ]
   })
}

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: "Aman", age: 20 },
        { name: event.target.value, age: 24 },
        { name: "chan", age: 90 }
      ]
    })
  }

  togglePersonsHandler=()=>{
     const doesShow=  this.state.showPersons
     this.setState({
       showPersons: !doesShow
     })
  }

  render(){

   const style={
     backgroundColor:"yellow",
     border:"2px solid red",
     padding:"8px"
    }

    let persons=null

     if (this.state.showPersons) {
       persons= (
         this.state.person.map(person=>{
           return <Person name={person.name} age={person.age} />
         })
       )
     }
    return (
      <div className="App">
        <h1>this is my first react app </h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Names</button>  {/* this is the way of passing value in the event handler using bind */}
       {persons}
      </div>
        )
  

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
    }
  }

export default App;
