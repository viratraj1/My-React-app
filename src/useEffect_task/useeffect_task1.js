import { useEffect, useState } from "react"




const TextEffect=()=>{
    const [timer,setTimer]=useState(0)
    const [counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log("inside use effect");

    },[counter])

    


    return(
        <div>
            <h1>timer:{timer} , {console.log("inside component")}</h1>
            <button onClick={()=>{ setTimer(timer+1)}}>update time</button>
            <h1>counter:{counter}</h1>
            <button onClick={()=>{ setCounter(counter+1)}}>update counter</button>
        
        </div>


    )

}

export default TextEffect;









