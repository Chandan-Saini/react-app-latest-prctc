import React, { Component } from "react"

import Person from "./Person/Person"

class Persons extends Component{

    static getDerivedStateFromProps(props,state){
        console.log('persons.js getderive from props');
        return state
    }
   
    shouldComponentUpdate(nextProps,nextUpdate){
        console.log("Persons.js shouldComUpdate");
        return true
    }
    componentDidUpdate(){
        console.log("comp did update");
    }
   

    render(){
        console.log("Persons render met");
        return this.props.persons.map((person, index) => {
            return <Person
                change={(event) => this.props.nameChangedHandler(event, person.id)}
                click={() => this.props.deletePerson(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                isAuth={this.props.isAuthenticated}
            />
        }) 
    } 
}
export default Persons