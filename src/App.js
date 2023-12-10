import logo from './logo.svg';
import './App.css';
//import our saucy react stuff
import React, { useState, useEffect } from 'react'
//imports our components
import MoleContainer from './components/MoleContainer';

function App() {
  //defines score for the game
  let [score, setScore] = useState(0)

  //creates an anonymous function to create an array of molehills
  const createMoleHills = () => {
    //create empty array to hold components
    let hills = []

    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer setScore={setScore} score={score} />
      )
    }
    return (
      <div id="allHills">
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHills()}
    </div>
  );
}

export default App;
