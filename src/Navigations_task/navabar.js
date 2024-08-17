import { Link } from "react-router-dom";
import "./prodect.css";
import RecipeDropdown from "./Dropdown";
import { useContext } from "react";
import { RecipeContext } from "./Navaigation_all_list/allprodect";





const Navbar=()=>{
  const {favoriteDish}=useContext(RecipeContext)

    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    {/* Links */}
    <ul className="navbar-nav">
      <li className="nav-item">

     <Link to={"/"} className="nav"> Home</Link>


      </li>
      <li className="nav-item">
      <Link to={"/menu"} className="nav"> Menu</Link>

      </li>
      <li className="nav-item">

      <Link to={"/locations"} className="nav"> locations</Link>

      </li>
      <li className="nav-item">

      <Link to={"/registation"} className="nav"> Registation</Link>

      </li>
      <li className="nav-item">

<Link to={"/favouriteRecipe"} className="nav"> My favorite_Recipe {favoriteDish.length}</Link>

</li>
      

      {/* <RecipeDropdown/> */}
    </ul>
  </div>
</nav>

        </div>
    )
    

    
}

export default Navbar;

