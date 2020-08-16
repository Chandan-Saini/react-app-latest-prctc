import React,{Component} from "react"
import styles from "./Person.module.css"

class Person extends Component{
  
  render(){
    return(
      <div className = { styles.Person } >
        <h3 onClick={this.props.click}> My name is {this.props.name} and age is {this.props.age}</h3>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} /> {/* this is the usage of two way binding*/ }
  </div>    )

    }
}

export default Person