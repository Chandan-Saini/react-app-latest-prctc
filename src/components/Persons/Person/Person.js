import React,{Component} from "react"
import styles from "./Person.module.css"
import Aux from "../../../hoc/Auxiliary"

class Person extends Component{
  
  render(){
    console.log("Person.js render met");
    return( <Aux>
      <h3 onClick={this.props.click}> My name is {this.props.name} and age is {this.props.age}</h3>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.change} value={this.props.name} />
    </Aux>
   
    )

    }
}

export default Person