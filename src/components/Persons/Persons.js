import React, { Component } from "react"

import Person from "./Person/Person"

class Persons extends Component{
    render(){
        console.log("Persons render met");
        return this.props.persons.map((person, index) => {
            return <Person
                change={(event) => this.props.nameChangedHandler(event, person.id)}
                click={() => this.props.deletePerson(index)}
                name={person.name}
                age={person.age}
                key={person.id}
            />
        }) 
    } 
}
export default Persons