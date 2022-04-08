import React, { useState } from 'react';


function intialValue(){
  console.log("function called");
  return 0;
}

function HookuseState() {
    const [name,setName]= useState("dipesh");
    const [flag,setFlag]=useState(false); 
    //const [steps,setSteps]=useState(0);
    const [steps,setSteps]=useState(intialValue());
    const [names,setNames]=useState([]);

    function changeName(){
        console.log("clicked");
       // return setName("Nitesh");
        return setFlag(!flag);
    }
    function increment(){
    // setSteps((prevState)=>prevState+1);
       setSteps((prevState)=>prevState+2);
    }
    function decrement(){
        return setSteps(steps-1);
    }
    function addNames(e){
        e.preventDefault();
        setNames([...names,{id:names.length,name}]);
        setName("");
   }  



  return (
    <> 
    <h1>
     {/* <div>Hello,{name}</div> */}
     <div>Hello,{flag ? name: ""}</div>
      <button onClick={changeName}>Click Me!</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
    </h1>
    <hr></hr>
     <form onSubmit={addNames}>
          <input type="text" value={name} 
            placeholder="add names" 
            onChange={(e)=> setName(e.target.value)}/>

          <button>Submit</button>
     </form>
      <hr></hr>
      <ul>
          {names.map((item) =>(
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </>
  )
}

export default HookuseState
