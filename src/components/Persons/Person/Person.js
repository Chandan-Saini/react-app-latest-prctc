import React,{Component, createRef} from "react"
import styles from "./Person.module.css"
import Aux from "../../../hoc/Auxiliary"
import withClass from "../../../hoc/withClass"
import PropTypes from "prop-types"
import Persons from "../Persons"
import AuthContext from '../../../context/auth-context'


class Person extends Component{
  constructor(props){
    super(props)
    this.InputElRef=React.createRef()
  }

  static contextType = AuthContext

  componentDidMount(){
    this.InputElRef.current.focus()
    console.log(this.context.authenticated);

  }
  render(){ 
    console.log("Person.js render met");
    return( <Aux>
        { this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
      
      
      <h3 onClick={this.props.click}> My name is {this.props.name} and age is {this.props.age}</h3>
      <p>{this.props.children}</p>
      <input ref={this.InputElRef} type="text" onChange={this.props.change} value={this.props.name} />
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