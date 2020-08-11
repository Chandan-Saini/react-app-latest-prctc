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
  otherState:'some other state'
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

  changeHandler = (event) => {
    this.setState({
      person: [
        { name: "Aman", age: 20 },
        { name: event.target.value, age: 24 },
        { name: "chan", age: 90 }
      ]
    })
  }

  render(){

   const style={
     backgroundColor:"yellow",
     border:"2px solid red",
     padding:"8px"
    }

    return (
      <div className="App">
        <h1>this is my first react app </h1>
        <button style={style} onClick={this.eventHandler.bind(this, "Updated")}>Switch</button>  {/* this is the way of passing value in the event handler using bind */}
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person change={this.changeHandler} click={this.eventHandler.bind(this, "Updated 2")}  name={this.state.person[1].name} age={this.state.person[1].age}> this is a text</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>

    );
  }

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
}

export default App;
