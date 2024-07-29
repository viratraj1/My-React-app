import { useEffect, useState } from "react";




const Componentdidupdate = ()=>{

const[count,setCount]= useState(0)

useEffect(()=>{

    console.log("hello raj")

},[count])


const countHandler=()=>{
    setCount(count +1)
}


    return(

     <div>
     
     <button onClick={countHandler}> Count{count}</button>
     </div>

    )
}

export default Componentdidupdate;

