import React, { Component } from "react";
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
    {id:"jygy1",name:"Aman",age:20},
    {id:"jygy2",name:"Akku",age:24},
    {id:"jygy3",name:"chan",age:22}
  ],
  otherState:'some other state',
  showPersons:false
}



  nameChangedHandler = (event,id) => {
    const personIndex= this.state.persons.findIndex(p=>{ return p.id===id})
       const person= {...this.state.persons[personIndex]}

       person.name=event.target.value
      
      const persons=[...this.state.persons]
       persons[personIndex]=person
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler=()=>{
     const doesShow=  this.state.showPersons
     this.setState({
       showPersons: !doesShow
     })
  }

  deletePerson=(index)=>{
    // const persons= this.state.persons.slice() //this slice here is returning a new array so that we do not directly manuplate the original array, instead of slice we can also use spread operator "..."
    const persons= [...this.state.persons]
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
           return <Person change={(event)=>this.nameChangedHandler(event, person.id)} click={()=>this.deletePerson(index)} name={person.name} age={person.age} key={person.id} />
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
