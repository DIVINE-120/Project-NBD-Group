import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import User from "../views/User";
import Logout from "../views/logout"
import Attendance from "../components/Attendance"
import Permission from "../components/permission";
const index =() =>{
    return(
        <>
     
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/user" element={<User/>}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
            <Route exact path="/Attendance" element={<Attendance/>}></Route>
            <Route exact path="/Permission" element={<Permission/>}></Route>
        </Routes>
        
        </>
        
    )
}
export default index;