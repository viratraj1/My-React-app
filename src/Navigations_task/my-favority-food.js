import { useContext } from "react";
import Navbar from "./navabar";
import { RecipeContext ,removeFromFavorite} from "./Navaigation_all_list/allprodect";
import "./prodect.css"

const Myfavorityfood = () => {
  const { favoriteDish, removeFromFavorite } = useContext(RecipeContext);

  const removeHandler = (eachFood) => {
    removeFromFavorite(eachFood.id);
  };
  return (
    <div>
      <Navbar />
      <h2>My favorite Screen</h2>
      {favoriteDish.length > 0 ? (
        <div className="frorite">
          {favoriteDish.map((each) => {
            return (

             
                <div className="favoritefood" >
                <h2>{each.name}</h2>
                <img src={each.image} className="recipeimg" />
                <button onClick={() => removeHandler(each)} className="bcbtn">Remove Food</button>
                
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Recipe </h2>
      )}
    </div>
  );
};

export default Myfavorityfood;
