import React,{Component} from "react"
import styles from "./Person.module.css"
import Aux from "../../../hoc/Auxiliary"
import withClass from "../../../hoc/withClass"
import PropTypes from "prop-types"
import Persons from "../Persons"
class Person extends Component{
  componentDidMount(){
    this.InputElRef.focus()
  }
  render(){
    console.log("Person.js render met");
    return( <Aux>
      <h3 onClick={this.props.click}> My name is {this.props.name} and age is {this.props.age}</h3>
      <p>{this.props.children}</p>
      <input ref={(inpEl)=> this.InputElRef=inpEl} type="text" onChange={this.props.change} value={this.props.name} />
    </Aux>
  )  }
}

Person.propTypes={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  change:PropTypes.func
}
export default withClass(Person,styles.Person)