import { useContext } from "react";
import List from "../cardaipilist/eachitem";
import RecipeList from "../Loderapi/recipes-list";
import RecipeDropdown from "./Dropdown";


import Navbar from "./navabar";
import RecipeList1 from "./prodectlist";
import { RecipeContext } from "./Navaigation_all_list/allprodect";



const Homescreen =()=>{
//     const {recipeList}=useContext(RecipeContext)

// console.log(recipeList,"recipeList");


    return(
        <div>

            <Navbar/>
            <RecipeList1/>
           
          {/* {
            recipeList&&recipeList.recipes && recipeList.recipes.length>0&&recipeList.recipes.map(each=>{
                return (
                    <div>
                        <h2>{each.name}</h2>
                    </div>
                )
            })
          } */}

           </div>





           

        
    )  
}

export default Homescreen;





