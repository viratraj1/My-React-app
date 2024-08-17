import axios from "axios";
import { useContext, useState } from "react";
import { RecipeContext } from "./Navaigation_all_list/allprodect";



const Searchbar=()=>{
const {setSearchQuery,FetchRecipes}=useContext(RecipeContext)
const [query,setQuery]=useState("")
const [list,setList]=useState([])





const handleChange = (e)=>{
    setQuery(e.target.value)
    setSearchQuery(e.target.value);
    searchProducts(e.target.value)
    FetchRecipes(e.target.value)
   
}
const searchProducts=async(searchInput)=>{
    const response=await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`)
    console.log(response);
    
    setList(response.data.recipe)
    
}


    return(
      
        <div>
           <input placeholder="Type to Recipe..." value={query} onChange={handleChange} className="search"/>

    
        </div>

    )
}

export default Searchbar;



