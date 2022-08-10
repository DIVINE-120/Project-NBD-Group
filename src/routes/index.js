import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import User from "../views/User";
import Dash from "../views/Dashboards"
const index =() =>{
    return(
        <>
     
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/user" element={<User/>}></Route>
            <Route exact path="/Dashboards" element={<Dash/>}></Route>
        </Routes>
        
        </>
        
    )
}
export default index;