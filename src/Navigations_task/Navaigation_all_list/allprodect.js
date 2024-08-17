import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuScreen from "../MenuScreen";
import Homescreen from "../Wap_page";
import Locations_screen from "../locations";
import Registration_screen from "../registation";
import RecipeDetail from "../recipe-detail-screen";
import Dropdownlist from "../Dropdown-data";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Myfavorityfood from "../my-favority-food";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RecipeContext = createContext();

const NavigationStack = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [favoriteDish, setFavoriteDish] = useState([]);
  const [serch,setSearchQuery]=useState("")
  useEffect(() => {
    FetchRecipes();
  }, []);

  const FetchRecipes = async (searchInput="") => {
    try {
      const { status, data } = await axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`);
      const newData=data.recipes.map(EachData=>{
        return{
          ...EachData,existsInFavorite:false
        }
      })



      if (status === 200) {
        // console.log(data);
        setRecipeList(newData);
      }
    } catch (err) {}
  };

  const addFavoriteHandlertwo = (newDish) => {
    
    const recipeExists=favoriteDish.find(eachFood=>eachFood.id==newDish.id)

    const newRecipesList=recipeList.map((eachRecipe)=>{
      if(eachRecipe.id==newDish.id){
        return {
          ...eachRecipe,existsInFavorite:true
        }
        } else{
          return eachRecipe;
      }
    })
    setRecipeList(newRecipesList)



    if(recipeExists){
        toast.error("Already exists in favourite foods!")

    }else{
       

        setFavoriteDish([...favoriteDish, newDish]);
        toast.success("added to favourites foods!")
    }

  };
  const removeFromFavorite=(id)=>{

    const newRecipesList=recipeList.map((eachRecipe)=>{
      if(eachRecipe.id==id){
        return {
          ...eachRecipe,existsInFavorite:false
        }
        } else{
          return eachRecipe;
      }
    })




    const newFavoriteList=favoriteDish.filter(eachDish => eachDish.id!==id)
    setFavoriteDish(newFavoriteList)
    
  }

  return (
    <RecipeContext.Provider
      value={{
        recipeList: recipeList,
        favoriteDish: favoriteDish,
        addFavoriteHandlertwo: addFavoriteHandlertwo,
        removeFromFavorite:removeFromFavorite,
        FetchRecipes:FetchRecipes,
        setSearchQuery:setSearchQuery
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/locations" element={<Locations_screen />} />
          <Route path="/registation" element={<Registration_screen />} />
          <Route path="/RecipeId" element={<Dropdownlist />} />
          <Route path="/favouriteRecipe" element={<Myfavorityfood />} />

          <Route path="/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </RecipeContext.Provider>
  );
};

export default NavigationStack;
