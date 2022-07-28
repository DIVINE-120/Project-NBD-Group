import React from "react";
import "../App.css";
import App from "../App";
import Logo from "../assets/favicon.png"; 

function Navbar() {
    return(   
          
<div className="byiza">
     <img src={Logo} alt="logo" className="logo-img"/> 
    <div className="divine">

<ul className="nav-links">
                   <li>
                       <a href="home" className="nav-link">
                           Home
                           </a></li>
                           <li><a href="aboutus" className="nav-link">
                               ContactUs
                               </a></li>
                               <li><a href="Regulation" className="nav-link">
                                   Regulation
                                   </a></li>
                                   <li><a href="Attandance" className="nav-link">
                                   Attendance
                                   </a></li>
                                   <li><a href="Registration" className="nav-link">
                                   Registration
                                   </a></li>
                                   </ul>
                                   
</div>
</div>
  );   
}
export default Navbar;  