import React from "react";

const Props = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello I am {props.name} a.k.a {props.heroname}
      </h1>
      {props.children}
    </div>
  );
};

export default Props;
