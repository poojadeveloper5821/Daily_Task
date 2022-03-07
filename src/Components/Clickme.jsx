import { useState } from "react";

function Clickme() {
  const [date, setDate] = useState();

  console.log("Date", date);
  return (
    <div>
      <h1>Selected Date:{date}</h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );

  // const name="Pooja";
  // const currDate= new Date().toLocaleDateString();
  // const currTime=new Date().toLocaleTimeString();
  // return(
  //     <div>
  //         <h1>Hello everyone, My name is {name}</h1>
  //          <h2>Current Date Time Data</h2>
  //          <p>Todays'Date is {currDate}</p>
  //          <p>The time is {currTime}</p>
  //     </div>
  // )
}

export default Clickme;
