import React,{useEffect} from 'react'
import cockpitCss from "./Cockpit.module.css"

const Cockpit=(props)=>{
    useEffect(()=>{
        console.log("use Effect runs");
    })
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

    return (<div className={cockpitCss.Cockpit}>
        <h1 className={classesArr.join(" ")}>{props.title}</h1>
        <button className={btnClass} onClick={props.togglePersonsHandler}>
            Show Names
          </button>
          </div>)
}

export default Cockpit