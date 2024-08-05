import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./prodect.css"
import Navbar from "./navabar";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [RecipeDetail, setRecipeDetail] = useState({});
  useEffect(() => {
    fetechEachProduct();
  }, [recipeId]);
  const fetechEachProduct = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    console.log(data)
    setRecipeDetail(data);
  };

  return (
    <div>
      
      <Navbar/>
      {Object.keys(RecipeDetail).length > 0 ? (
        <div className="resitemlist">
          <h4>{RecipeDetail.name}</h4>
          <img src={RecipeDetail.image}  className="rrrimg"/>
          <h4><li> <span>ingredients</span>{RecipeDetail.ingredients}</li></h4>
          <h4> <span>instructions</span>{RecipeDetail.instructions}</h4>
         
        </div>
      ) : (
        <>
          <h2>Place waite Data is loading...</h2>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
