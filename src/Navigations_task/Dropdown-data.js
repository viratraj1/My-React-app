import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./navabar";

const Dropdownlist=()=>{
    const {RecipeId}=useParams();
    const [Droperecipelist,setDroperecipelist]=useState({})
    useEffect(()=>{
        RecipesDropedownlist()
    },[RecipeId]);
    
    const RecipesDropedownlist= async()=>{
        const {data}=await axios.get(`https://dummyjson.com/recipes/${RecipeId}`)
       setDroperecipelist(data)
    }
    return(
        <div>
            <Navbar/>
            {
                Object.keys(Droperecipelist).length > 0 ? (
                    <div>
                        <h4>{Droperecipelist.name}</h4>
                        <img src={Droperecipelist.image}/>
                        <h3>{Droperecipelist.rating}</h3>
                    </div>
                ):(
                    <>
                    <h2>Place waite Data is loading.....  </h2>
                    
                    </>
                )
            }
        </div>
    )
}

export default Dropdownlist;
