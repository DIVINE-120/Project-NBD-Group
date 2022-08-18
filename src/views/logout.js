import React from "react";
import Logo from "../assets/favicon.png";
import photo from "../assets/img/home.jpg";

import "./navbar.css";


const Home = () => {
  return (
    <>
   <div className="loginform">
   <img src={Logo} alt="logo" className="logo-img" />
  
  
   
   </div>
   <div className="form1"> 
   <img src={photo} alt="logo" className="photo"/>
   </div>
   <label className="label1">Email:</label>
   <div className="loginformpart1" >
   
<input type="text" name="username" placeholder="Email"></input>
</div>
<label className="label2">PassWord:</label>
<div className="pass">
  
<input type="password" name="password" ></input>
   </div>
   <div className="button">
   <input class="btn" type="button" name="" value="Sign In"/>
   </div>
    </>
  );
};
export default Home;
