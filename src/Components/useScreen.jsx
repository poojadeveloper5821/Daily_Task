import { useEffect, useState } from "react";

export default function useScreen(){
    const[screenSize,setScreenSize]=useState();
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener("resize",checkScreenSize);
        return()=>{
            window.removeEventListener("resize");
        }
    },[]);
    const checkScreenSize=()=>{
        if(window.innerWidth>992) return setScreenSize("large");
        if(window.innerWidth<992&& window.innerWidth>600) return setScreenSize("medium");
        if(window.innerWidth<600) return setScreenSize("small");

    };
    return screenSize;
}