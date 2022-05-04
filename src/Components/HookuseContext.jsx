import React, { useState } from "react";
import Context1 from "./Context1";
//import Context2 from "./Context2";
import { CounterContext } from "./CounterContext";

function HookuseContext() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App border">
      <h1> App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <CounterContext.Provider value={{counter,setCounter}}>
        <Context1 />
        <hr></hr>
      </CounterContext.Provider>
    </div>
  );
}

export default HookuseContext;
