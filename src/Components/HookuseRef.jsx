import React, { useState, useRef, useEffect } from "react";

function HookuseRef() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputE1 = useRef("");
  const previousCounterRef = useRef("");
  console.log(inputE1);

  const resetInput = () => {
    setName("");
    inputE1.current.focus();
    console.log(inputE1.current.value);
    inputE1.current.value = "Pooja";
  };

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);

  return (
    <>
      <div>
        <input
          ref={inputE1}
          name="name"
          automcomplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <p>My Name is {name}</p>
      <h1> Random Counter:{counter}</h1>
      {typeof previousCounterRef.current !== "undefined" && (
        <h2>Previous Counter:{previousCounterRef.current}</h2>
      )}
      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
        Generate Number
      </button>
    </>
  );
}

export default HookuseRef;
