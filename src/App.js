import { React, useState } from 'react'
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + Math.random(1, 10))
  };

  const reset = () => {
    setCounter(0)
  }


  return (
    <div className="counter">
      <h1>Count game</h1>
      <h3>Get to 50 to win!</h3>
      <h3>Button Clicked <span id="display">0</span> Times</h3>

      <span className="counter__output">{
        Math.round(counter)
      }
      </span>
      <div className="btn__container">
        <button id="btn" className="control__btn" onClick={increase}>+</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div >
  );
}
