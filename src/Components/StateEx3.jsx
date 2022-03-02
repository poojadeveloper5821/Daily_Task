import React, { useState } from "react";

function StateEx3() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <br />
      Count- {count}
      <br />
      <br />
      <button onClick={() => setCount(count + 5)}>Increment</button>
    </div>
  );
}

export default StateEx3;
