import logo from './logo.svg';
import './App.css';
//import our saucy react stuff
import React, { useState, useEffect } from 'react'
//imports our components
import MoleContainer from './components/MoleContainer';
//import GameTimer from './components/GameTimer';

function App() {
  //EMBELISHMENT
  //build some state variables for timer countdown
  let [currentTime, setCurrentTime] = useState(0);
  let [remainingTime, setRemainingTime] = useState(5);
  let [timeLeft, isTimeLeft] = useState(true)
  //leverage our knowledge of useEffect to create a countdown
  useEffect(() => {
    if (remainingTime >= 0) {
      const intervalId = setTimeout(() => {
        //on the given interval of 1000 ms, update current time and remaining time
        setCurrentTime(currentTime + 1000);
        setRemainingTime(remainingTime - 1);
      }, 1000);
      //always clear your interval!
      return () => clearTimeout(intervalId);
    }
    else {
      setRemainingTime(0)
      isTimeLeft(false)
    }
    //no dependencies so that arrat is empty
  }, [remainingTime]);//add remainingTime



  //END EMBELISHMENT

  //defines score for the game
  let [score, setScore] = useState(0)

  //creates an anonymous function to create an array of molehills
  const createMoleHills = () => {
    //create empty array to hold components
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer timeLeft={timeLeft} setScore={setScore} score={score} />
      )
    }
    return (
      <div id="allHills">
        {hills}
      </div>
    )
  }
  //the actual APP 
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <h2>Score: {score}</h2>
      <h2>Time Remaining! {remainingTime}</h2>
      {createMoleHills()}
    </div>
  );
}

export default App;
