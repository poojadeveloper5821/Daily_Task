//import React,{useState} from 'react'
import useCounter from "./useCounter";

function CustomHook() {
  //const[counter,setCounter]=useState(0);
  const [counter, increment, decrement,reset] = useCounter(0);
  // const increment=()=>{
  //     return setCounter(counter +1);
  // };
  // const decrement=()=>{
  //     return setCounter(counter -1);
  // };
  return (
    <div className="App border">
      <h1>Custom Hook Examples</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CustomHook;
