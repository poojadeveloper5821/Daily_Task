import  React,{ useEffect,useState} from "react";


function HookuseEffect(){

const[time,setTime]=useState(new Date().toString());
const[msg,setMsg]=useState("functional Component");

useEffect(()=>{
    console.log("component Mounted or updated");
    const interval = setInterval(showDate,1000);

},[time]);
const showDate=()=>{
    setTime(new Date().toString());
};


    return(
        <>
        <hr></hr>
        <div>{time}</div>

<button onClick={showDate}> Show Date </button>
<div>{msg}</div>

<button onClick={()=> setMsg("Changed Functional Component")}>

    Change Message
</button>

        </>
    );
}
export default HookuseEffect