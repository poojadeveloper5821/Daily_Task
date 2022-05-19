import React from "react";

import Select from "react-select";

function DropdownList() {
  const data = [
    {
      value: 1,
      label: "Maths",
    },
    {
      value: 2,
      label: "Science",
    },
    {
      value: 3,
      label: "Physics",
    },
    {
      value: 4,
      label: "Chemistry",
    },
    {
      value: 5,
      label: "English",
    },
  ];


  
  return (
    <>
      List of Subjects
      <br />
      <Select 
      options={data} />
      <br/>
    </>
  );
}

export default DropdownList;
