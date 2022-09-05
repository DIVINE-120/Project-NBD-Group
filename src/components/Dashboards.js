import React, {useEffect,useState }  from "react";
import "./Dashboards.css";
import byiza from "../assets/favicon.png";
import by from "../assets/img/byiza.jpeg";
// import userData from "../assets/json/user.json";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import {
  SettingFilled,
  LogoutOutlined,
  NotificationOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  AppstoreOutlined,
  RightOutlined,
  DownOutlined,
} from "@ant-design/icons";


import Userservices from "../services/userservices"


const User = () => {

const [userData,setuserData] = useState([]);
  useEffect(()=> {
    Userservices.getAlluser().then((res)=>{setuserData(res?.data)});
    },[]);
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="Dashboards">
                <span className="icon">
               
                  <DashboardOutlined />
                </span>
                <span className="icon">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="permission">
                <span className="icon">
                  
                  <AppstoreOutlined />
                </span>
                <span className="icon">Permission</span>
              </a>
            </li>
            <li>
              <a href="Attendance">
                <span className="icon">
                  <NotificationOutlined />
                </span>
                <span className="icon">Attendance</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <SettingFilled />
                </span>
                <span className="icon">setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  {" "}
                  <QuestionCircleOutlined />
                </span>
                <span className="icon">Help</span>
              </a>
            </li>
            <li>
              <a href="Logout">
                <span className="icon">
                  <LogoutOutlined />
                </span>
                <span className="icon">Logout</span>
              </a>
            </li>
          </ul>
          <img src={byiza} alt="byiza" className="photo1" />
        </div>
        <div className="main">
        <div className="user">
       
        </div>
         
      
          
        </div>
        {/* background all imformation */}
       
        <div className="user2">
        <img src={by} alt="db" className="photo2" />
        </div>
    
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Attendance records</h2>
            
          </div>
          <table>
            <thead>
              <tr>
              <td>Names</td>
                <td>Email</td>
                <td>phone</td>
                <td>Status</td>
                <td>Activity</td>
                <td>RecordedBy</td>
               
              </tr>
            </thead>
            <tbody>

 {userData.map((user)=>(
         <tr>
                <td>{user?.names}</td>
                <td>{user?.email}</td>
                <td>{user?.phone} </td>
                <td  className="{user.status}"
              style={{
                backgroundColor:
                ((user?.status ==='communicated'&& 'yellow')||
                (user?.status ==='absent'&& 'red')||
                (user?.status ==='present'&& 'green'))
              }}>{user?.status}
               </td>
                <td>{user?.activity}</td>
                <td>{user?.dateAt}</td>

              </tr>
    ))
    
} 
             

            </tbody>
          </table>
        </div>
      </div>
      <div className="titlename">
        <h1 className="heading1">Hello Divine!!</h1>
        <h6 className="heading2">Byiza Divine</h6>
        <h5 className="heading3">Student</h5>
        <h4 className="heading4"></h4>
      </div>

                  
             
                  <a href="" className="dayd">
                    All Days

                  </a>
                  
                
                  <a href="" className="absentd">
                    Absent Days
                  </a>
                  <a href="" className="communicatedd">
                    Communicated Days
                  </a>
                  <h3 className="to">Date:</h3>
                  <div className="calendto">
                    <input type="date" id="date" name="date" className="too" />
                  </div>
       </div>
      <Pagination defaultCurrent={1} total={50}  style={{marginLeft:"60rem",paddingTop:"8rem"}}/>
    </>
  );
};
export default User;
