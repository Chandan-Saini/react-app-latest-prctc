import React from 'react'


const cockpit=(props)=>{

    const classesArr = [];
    if (props.persons.length <= 2) {
        classesArr.push("red");
    }
    if (this.state.persons.length <= 1) {
        classesArr.push("bold");
    }

    return (<div>
        <h1 className={classesArr.join(" ")}>this is my first react app </h1>
        <button className={btnClass} onClick={props.togglePersonsHandler}>
            Show Names
          </button>
          </div>)
}

export default cockpit