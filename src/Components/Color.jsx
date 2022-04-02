import React from 'react';
import  {useState} from 'react';

function Color(){
    const[color,setColor]= useState("red");
    return(
        <div>
            <h1> My Favorite Color is  {color}</h1>
            <button onClick={()=> setColor("blue")}> Blue </button>
        </div>
    );
}

export default Color;