import React, { useState, useMemo ,useEffect,useCallback} from "react";

function HookuseCallback() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  console.log("useMemo : ",result);

  const [name, setName] = useState("");
  const displayName=useCallback(()=>{
      return name;
  },[name]);

console.log("useCallback : ",displayName);
  return (
    <>
      <div className="App">
        <h1>
          Factorial of {counter} is : <span>{result}</span>
        </h1>
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      <hr></hr>
      <div>
        <label>Enter Name</label>
      </div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr></hr>
      <DisplayName displayName={displayName}></DisplayName>
    </>
  );
}

const DisplayName = (({ displayName}) => {
  //console.log("rendered");
  const[value,setValue]=useState("");
  
  useEffect(()=>{
      setValue(displayName());
      console.log("component rendered");
  },[displayName]);

  return <p>{`My name is ${value}`}</p>;
});

function factorial(n) {
  let i = 0;
  while (i < 2000000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default HookuseCallback;
