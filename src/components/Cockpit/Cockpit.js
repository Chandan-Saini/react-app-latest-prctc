import React,{useEffect,useRef} from 'react'
import cockpitCss from "./Cockpit.module.css"
import AuthContext from '../../context/auth-context'
const Cockpit=(props)=>{
    const btnEle=useRef(null)
    useEffect(()=>{
        console.log("use Effect runs");
        btnEle.current.click()
        return ()=>{
            console.log("Cockpit cleanup code runs");
        }
    },[])
    const classesArr = [];
    let btnClass=''
    
    if (props.showPersons) {
        btnClass = cockpitCss.red
    }

    if (props.persons.length <= 2) {
        classesArr.push(cockpitCss.red);
    }
    if (props.persons.length <= 1) {
        classesArr.push(cockpitCss.bold);
    }

    return (
      <div className={cockpitCss.Cockpit}>
        <h1 className={classesArr.join(" ")}>{props.title}</h1>
        <button
          ref={btnEle}
          className={btnClass}
          onClick={props.togglePersonsHandler}
        >
          Show Names
        </button>
        <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Login</button>}
        </AuthContext.Consumer>
      </div>
    );
}

export default Cockpit