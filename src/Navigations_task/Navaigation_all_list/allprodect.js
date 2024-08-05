import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuScreen from "../MenuScreen";
import Homescreen from "../Wap_page";
import Locations_screen from "../locations";
import Registration_screen from "../registation";
import RecipeDetail from "../recipe-detail-screen";
import Dropdownlist from "../Dropdown-data";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

 export const RecipeContext=createContext()

const NavigationStack=()=>{
    const [recipeList,setRecipeList]=useState([])
    useEffect(()=>{
        FetchRecipes()
    },[])

    const FetchRecipes = async () => {
 
        try {
          const { status,data } = await axios.get("https://dummyjson.com/recipes");
            if (status === 200){
                // console.log(data);
                setRecipeList(data)
                
            }
        } catch (err) {}
        
      };


    return(
        <RecipeContext.Provider  value={{
            recipeList:recipeList,
        }}>
        <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Homescreen/>} />
        <Route path="/menu"  element={<MenuScreen/>} />
        <Route path="/locations"  element={<Locations_screen/>} />
        <Route path="/registation"  element={<Registration_screen/>} />
        <Route path="/RecipeId"  element={<Dropdownlist/>} />


        <Route path="/:recipeId"  element={<RecipeDetail/>} />
        </Routes>

        </BrowserRouter>
        </RecipeContext.Provider>
    )


}


export default NavigationStack;
