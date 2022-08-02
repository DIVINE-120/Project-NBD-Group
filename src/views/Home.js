import React from "react";
import Logo from "../assets/favicon.png";
import photo from "../assets/img/shecancode.webp";
import pho from "../assets/img/ty.jpg";
import "../components/navbar.css";
import {
  DesktopOutlined,
  ReadOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
const Home = () => {
  return (
    <>
    <div className="footer"></div>
      <div className="byiza">
        <img src={Logo} alt="logo" className="logo-img" />
        <div className="divine">
          <ul className="nav-links">
            <li>
              <a href="home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="aboutus" className="nav-link">
                ContactUs
              </a>
            </li>
            <li>
              <a href="Regulation" className="nav-link">
                Regulation
              </a>
            </li>
            <li>
              <a href="Attandance" className="nav-link">
                Attendance
              </a>
            </li>
            <li>
              <a href="Registration" className="nav-link">
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divto">
        <img src={photo} alt="logo" className="watching" />
      </div>
   <div className="loginform">
   <img src={Logo} alt="logo" className="logoform" />
   <h1 className="heading1">STUDENT LOGIN</h1>
   <form action="" method="" className="form">
    <input type="text" name="username " placeholder="write your Username here!!" required className="user"/><br></br><br></br><br></br>
    <input type="password" name="password " className="pass" placeholder="write your password here!!"/><br></br><br></br><br></br>
     <button type="button" className="button">LOGIN</button>
   </form>
   </div>
    </>
  );
};
export default Home;
