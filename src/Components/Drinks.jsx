import { useState } from "react";
function Drinks() {
  const [brand, setBrand] = useState("Parle Agro");
  const [model, setModel] = useState("Appy Fizz");
  const [year, setYear] = useState("2005");
  const [color, setColor] = useState("Black");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.<br/>
        <button onClick={() => setBrand("Pepsico")}> Orange Flavour </button>
        <button onClick={() => setModel("Mirinda")}> Mirinda </button>
        <button onClick={() => setYear("1959")}> 1959 </button>
        <button onClick={() => setColor("Orange")}> Orange </button>
      </p>
    </>
  );
}

export default Drinks;
