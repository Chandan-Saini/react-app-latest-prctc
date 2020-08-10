import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
       <h1>this is my first change live </h1>
      <Person name="Aman" age="23" />
      <Person name="Chan" age="29" />
      <Person name="Akku" age="28"/>
    </div>
   
  );

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
}

export default App;
