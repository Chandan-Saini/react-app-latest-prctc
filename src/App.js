import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return (
    <div className="App">
       <h1>this is my first change live </h1>
      <Person />
    </div>
   
  );

  // return React.createElement("div",{className:"App"},React.createElement("h1",null,"Hi this is my first change"))
}

export default App;
