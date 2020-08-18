import React,{useEffect,useRef, useContext} from 'react'
import cockpitCss from "./Cockpit.module.css"
import AuthContext from '../../context/auth-context'
const Cockpit=(props)=>{
    const btnEle=useRef(null)

    const authContxt=useContext(AuthContext)
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
        
          <button onClick={authContxt.login}>Login</button>
      </div>
    );
}

export default Cockpit