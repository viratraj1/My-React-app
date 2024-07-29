import { useEffect, useState } from "react";



const Useeffect_ex4 =()=>{
    const [xPosition,setxPosition]= useState(0)
    const [yPosition,setyPosition]= useState(0)
    
       useEffect(()=>{
        window.addEventListener("mousemove",mouseTrack)
        return ()=>{
            window.removeEventListener("mousemove",mouseTrack)
        }; 
       },[])
       const mouseTrack=(event)=>{
        setxPosition(event.clientX);
        setyPosition(event.clientY)
       }
    return(
        <div>
            <h4>xPosition{xPosition}</h4>
            <h4>yPosition{yPosition}</h4>

        </div>
    )
}
export default Useeffect_ex4;






