import React,{useState} from 'react'
import Context1 from './Context1';
import Context2 from './Context2';

function HookuseContext() {
const [counter ,setCounter]=useState(0);
const increment=()=>{
    setCounter(counter+1);
};
const decrement=()=>{
    setCounter(counter-1);
};


  return (
    <div className="App border">
        <h1> App Component</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>
        <hr></hr>
        <Context1 counter={counter}/>
        <Context2 counter={counter}/>
    </div>
  )
}

export default HookuseContext