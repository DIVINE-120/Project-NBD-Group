import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Home from "../views/Home"
const index =() =>{
    return(
        <>
        
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
        </Routes>
        </>
    )
}
export default index;