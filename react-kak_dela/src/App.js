import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(10);
  const [value, setvalue] = useState("");

  function increment() {
    setResult(result + 1);
    console.log(setResult);
  }
  function decrement() {
    setResult(result - 1);
  }
  return (
    <div className="App">
      <h1>{result}</h1>
      <h1>{value}</h1>
      <br></br>
      <input 
      value={value}
      onChange={(event) => setvalue(event.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
