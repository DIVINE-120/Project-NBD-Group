import  React from "react";
import{Routes,Route} from 'react-router-dom';
import Home from "../views/Home";

import User from "../views/User";
import Logout from "../views/logout"
import Attendance from "../components/Attendance"
import Permission from "../components/permission";
import Dashboards from "../components/Dashboards";
import Lecture from "../components/lecture";
import Register from "../components/addStudent"

const index =() =>{
    return(
        <>
     
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            
            <Route exact path="/user" element={<User/>}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
            <Route exact path="/AddStudents" element={<Register />}></Route>
            <Route exact path="/Attendance" element={<Attendance/>}></Route>
            <Route exact path="/Permission" element={<Permission/>}></Route>
            <Route exact path="/Dashboards" element={<Dashboards/>}></Route>
            <Route exact path="/lecture" element={<Lecture/>}></Route>
        </Routes>
        
        </>
        
    )
}
export default index;