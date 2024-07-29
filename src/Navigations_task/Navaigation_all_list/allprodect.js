import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuScreen from "../MenuScreen";
import Homescreen from "../Wap_page";
import Locations_screen from "../locations";
import Registration_screen from "../registation";




const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>

        <Route path="/"  element={<Homescreen/>} />
        <Route path="/menu"  element={<MenuScreen/>} />
        <Route path="/locations"  element={<Locations_screen/>} />
        <Route path="/registation"  element={<Registration_screen/>} />

        </Routes>

        </BrowserRouter>
    )


}


export default NavigationStack;
