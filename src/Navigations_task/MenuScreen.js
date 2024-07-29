import Menu from "./menu";
import Navbar from "./navabar"



const MenuScreen=()=>{
    return(
        <div>
            <Navbar/>
            <h1 className="honelist">...Menu List...</h1>

           <Menu/>

        </div>


    )
}

export default MenuScreen;
