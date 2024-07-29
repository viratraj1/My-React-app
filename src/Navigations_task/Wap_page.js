import List from "../cardaipilist/eachitem";
import RecipeList from "../Loderapi/recipes-list";
import Navbar from "./navabar";
import RecipeList1 from "./prodectlist";



const Homescreen =()=>{


    return(
        <div>

            <Navbar/>
           
           
            <RecipeList1/>
           

            <div className="putter">
                <h1> Mr..Raj Kumar</h1>
            </div>

        </div>
    )  
}

export default Homescreen;





