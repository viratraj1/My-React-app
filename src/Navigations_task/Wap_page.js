import { useContext } from "react";
import List from "../cardaipilist/eachitem";
import RecipeList from "../Loderapi/recipes-list";
import RecipeDropdown from "./Dropdown";
import "./prodect.css";

import Navbar from "./navabar";
import RecipeList1 from "./prodectlist";
import { RecipeContext } from "./Navaigation_all_list/allprodect";
import { useNavigate } from "react-router-dom";
import CarouselFadeExample from "./Navaigation_all_list/carousel";
import Searchbar from "./Searchbar";


const Homescreen = () => {
  const { recipeList } = useContext(RecipeContext);
  const {addFavoriteHandlertwo} = useContext(RecipeContext)
  const navigate=useNavigate()
 

  const addFoodHandler = (eachFood) => {
    addFavoriteHandlertwo(eachFood);
  };

  const goToFavoriteHandler=()=>{
    navigate("favouriteRecipe")
  }

  return (
    <div>
      <Navbar />
      <CarouselFadeExample/>
      <h1 className="one8">One 8</h1>
      <h2 className="one81">My Recipes...</h2>
      <Searchbar/>
    
      <div className="gridList" >
      {
        recipeList &&
        recipeList.length > 0 &&
        recipeList.map((each) => {
          return (
            <div className="box">
              <h2>{each.name}</h2>
              <img src={each.image} className="Recipsimg" />
              <button className="bcbtn1">View recipe</button><br></br>
              {
                each.existsInFavorite?
                <button  onClick={goToFavoriteHandler} className="bcbtn">
               Go to favorite
              </button>:
              <button onClick={() => addFoodHandler(each)} className="bcbtn">
              Add to favorite{" "}
            </button> 
              }
            
            </div>
          );
        })}
        </div>
        <div className="putter">
       

        <div className="ch51">
        <h2>About</h2>
        <h5>About us</h5>
        <h5>Delivery Information</h5>
        <h5>Privacy Ph5icy</h5>
        <h5>Terms & Conditions</h5>
        <h5>Contact us</h5>
    </div>
   <div  className="ch53">
    <h2>My company's</h2>
    <h5>CookDelightful </h5>
    <h5>CreateCuisine</h5>
    <h5>DelightfulDishes</h5>
    <h5>HomeKitchen</h5>
    <h5>KitchenCraft</h5>
    <h5>ChefEdition</h5>
 

    
     </div>

    <div  className="ch52">
        <h2>My Acount</h2>
        <h5>Sing in</h5>
        <h5> View Cart</h5>
        <h5>My Wishlist</h5>
        <h5>Track My Order</h5>
        <h5>Help</h5>
    </div>
          

    <h1 className="myname">Mr Raj Kumar...</h1>
        </div>

        
        

    </div>

  );
};

export default Homescreen;
