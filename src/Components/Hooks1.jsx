import React, { useState } from "react";

function Hooks1() {
  const [myName, setmyName] = useState("Pooja : Web Developer");
  const changeName = () => {
    let val = myName;
    if (val === "Pooja : Web Developer") {
      setmyName("Pooja Dongre");
    } else {
      setmyName("Pooja :MERN Stack Developer");
    }
  };
  console.log(myName);

  return (
    <>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        {" "}
        Click ME
      </button>
    </>
  );
}

export default Hooks1;
