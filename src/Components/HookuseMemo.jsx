import React, { useState, useMemo } from "react";

function HookuseMemo() {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const [name, setName] = useState("");
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
      <DisplayName name={name}></DisplayName>
    </>
  );
}

const DisplayName = React.memo(({ name }) => {
  console.log("rendered");
  return <p>{`My name is ${name}`}</p>;
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

export default HookuseMemo;
