import React from "react";

import data from "./../jsonfile";

function List() {
  // const data = {
  //   fullName: "Pooja",
  //   number: 234567890,
  //   email: "poojadongre94@gmail.com",
  //   talented: "yes",
  // };
  console.log(data);
  return (
    <div>
      <ol>
        <li>My Name is {data.fullName} Dongre.</li>
        <li>I am From Maharashtra</li>
        <li>My Contact number:{data.number}</li>
      </ol>
      <input type="text" />
    </div>
  );
}
export default List;
