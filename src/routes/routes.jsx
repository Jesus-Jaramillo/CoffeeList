import { Route, Routes } from "react-router-dom";
import CardCoffes from "../components/Coffee-Cards";
import AllProducts from "../pages/allProducts";
import AvailableNow from "../pages/availableNow";



function Navigations(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<AllProducts/>}/>
                <Route path="/availableNow" element={<AvailableNow/>}/>
            </Routes>
        </div>
    )
}

export default Navigations;