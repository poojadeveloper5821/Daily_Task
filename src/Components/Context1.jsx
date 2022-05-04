import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Context1() {
  const {counter,setCounter}= useContext(CounterContext);
  return (
    <div className="border">
      <h1>Function Context Component</h1>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <hr></hr>
      <Fchild />
    </div>
  );
}
const Fchild = () => {
  const {counter,setCounter} = useContext(CounterContext);
  return (
    <div className="border">
      <h1>Function Component</h1>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  );
};

export default Context1;
