import React, { Component } from "react";
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
    {name:"Aman",age:20},
    {name:"Akku",age:24},
    {name:"chan",age:22}
  ],
  otherState:'some other state',
  showPersons:false
}



  nameChangedHandler = (event) => {
    this.setState({
      persons: [
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

  deletePerson=(index)=>{
    const persons= this.state.persons
    persons.splice(index,1)
    this.setState({persons:persons})
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
         this.state.persons.map((person,index)=>{
           return <Person click={()=>this.deletePerson(index)} name={person.name} age={person.age} />
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
