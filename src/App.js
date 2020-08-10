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

eventHandler=()=>{
   this.setState({
     person: [
       { name: "Aman updated", age: 20 },
       { name: "Akku", age: 24 },
       { name: "chan", age: 90 }
     ]
   })
}
  render(){
    return (
      <div className="App">
        <h1>this is my first react app </h1>
        <button onClick={this.eventHandler}>Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person click={this.eventHandler}  name={this.state.person[1].name} age={this.state.person[1].age}> this is a text</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>

    );
  }

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
}

export default App;
