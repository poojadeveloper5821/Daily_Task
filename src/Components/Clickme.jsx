import React from 'react';

function Clickme(){
    const name="Pooja";
    const currDate= new Date().toLocaleDateString();
    const currTime=new Date().toLocaleTimeString();
    return(
        <div>
            <h1>Hello everyone, My name is {name}</h1>
             <h2>Current Date Time Data</h2>
             <p>Todays'Date is {currDate}</p>
             <p>The time is {currTime}</p>
        </div>
    )
}


export default Clickme;