import { Link } from "react-router-dom";
import "./prodect.css";




const Navbar=()=>{

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
    </ul>
  </div>
</nav>

        </div>
    )
    

    
}

export default Navbar;

