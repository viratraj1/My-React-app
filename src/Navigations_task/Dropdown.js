import axios from "axios";
import { useEffect, useState } from "react";
import "./prodect.css"

const RecipeDropdown = () => {
    const [recipes, setRecipes] = useState([]);
    const [selected,setSelected]=useState("")

    useEffect(() => {
        fetchData();
    }, []);
    
const Handler=(event)=>{
    event.preventDefault()
    setSelected(event.target.value)

}
    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/recipes");
            const revampedData = data.recipes.map((eachRecipe) => ({
                id: eachRecipe.id,
                name: eachRecipe.name,
            }));
            setRecipes(revampedData);
        } catch (err) {
            console.error("Failed to fetch recipes:", err);
        }
    };

    // const selectHandler = async (event) => {
    //     try {
    //         const selectedRecipeId = event.target.value;
    //         const { data } = await axios.get(`https://dummyjson.com/recipes/${selectedRecipeId}`);
    //         setSelectedRecipe(data);
    //     } catch (err) {
    //         console.error("Failed to fetch recipe details:", err);
    //     }
    // };
    // onChange={selectHandler}
    return (
        <div>
            {
                console.log(selected)
            }
            {recipes.length > 0 && (
                <select value={selected} onChange={Handler}  className="dropdown">                                      
                    {recipes.map((each) => (
                        
                        <option value={each.id} key={each.id}  >
                            {each.name}
                        </option>
                      
                    ))}
                </select>
            )}

            {Object.keys(selected).length > 0 && (
                <div>
                    <h4>{selected.name}</h4>
                    <h4>{selected.rating}</h4>
                </div>
            )}
        </div>
    );
};

export default RecipeDropdown;
