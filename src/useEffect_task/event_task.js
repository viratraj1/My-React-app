import { useEffect } from "react";





const Events=()=>{


    useEffect(()=>{
        window.addEventListener("mousemove",mouseTrack)
    },[])

    const mouseTrack = () =>{
      console.log("hello user")
    }
    return(

<div>
    
</div>

    )
}

export default Events;

