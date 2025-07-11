import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, useCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    console.log("Adding value", counter);
    useCounter(counter);
  };

  const remValue = () => {
    counter = counter - 1;
    console.log("Removing value", counter);
    useCounter(counter);
  };
  return (
    <>
      <h1>React and Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={remValue}>Remove value {counter}</button>
      <footer onClick={addValue}>Footer : {counter}</footer>
    </>
  );
}

export default App;
