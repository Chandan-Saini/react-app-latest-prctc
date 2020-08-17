import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass"
import Aux from "../hoc/Auxiliary"
class App extends Component {
  constructor(props) {
    super(props)
    console.log("constroctor met");
  }

  state = {
    persons: [
      { id: "jygy1", name: "Aman", age: 20 },
      { id: "jygy2", name: "Akku", age: 24 },
      { id: "jygy3", name: "chan", age: 22 },
    ],
    otherState: "some other state",
    showPersons: false,
    showCockpit:true,
    changeCounter:0
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState,props)=>{
      return { persons: persons,changeCounter:prevState.changeCounter+1}
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

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps met",props);
    return state
  }

  componentDidMount() {
    console.log("comp did mount");
  }

  render() {
    let persons = null;
    console.log("render met");
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          nameChangedHandler={this.nameChangedHandler}
          deletePerson={this.deletePerson}
        />
      );
    }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showCockpit:false})}} >Remove Cockpit</button>
       { this.state.showCockpit? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonsHandler={this.togglePersonsHandler}
        />:null}
        {persons}
      </Aux>
    );

    // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
  }

 
}

export default withClass(App,classes.App);
