import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"
import cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  state = {
    persons: [
      { id: "jygy1", name: "Aman", age: 20 },
      { id: "jygy2", name: "Akku", age: 24 },
      { id: "jygy3", name: "chan", age: 22 },
    ],
    otherState: "some other state",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePerson = (index) => {
    // const persons= this.state.persons.slice() //this slice here is returning a new array so that we do not directly manuplate the original array, instead of slice we can also use spread operator "..."
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {

    let persons = null;
    let btnClass=''

    if (this.state.showPersons) {
      persons = (
       <div>
        <Persons persons={this.state.persons} nameChangedHandler={this.nameChangedHandler} deletePerson={this.deletePerson} />
      </div>
      )
       btnClass= classes.red
    }

    const classesArr = [];
    if (this.state.persons.length <= 2) {
      classesArr.push("red");
    }
    if (this.state.persons.length <= 1) {
      classesArr.push("bold");
    }

    return (
     
        <div className={classes.App}>
         <cockpit togglePersonsHandler={this.togglePersonsHandler} />
          {persons}
        </div>
    );

    // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
  }
}

export default App;