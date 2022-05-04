import React from "react";

function Context1({ counter }) {
  return (
    <div className="border">
      <h1>Function Context Component</h1>
      <h2>{counter}</h2>
      <hr></hr>
    </div>
  );
}
const Fchild = () => {
  return (
    <div className="border">
      <h1>Function Component</h1>
    </div>
  );
};

export default Context1;
