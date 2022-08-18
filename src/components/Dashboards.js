import React from "react";
import "./Dashboards.css";
import byiza from "../assets/favicon.png";
import by from "../assets/img/byiza.jpeg";
import userData from "../assets/json/user.json";
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

import {useEffect,useState } from "react";

const Dashboards = () => {

  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <a href="User">
                <span className="icon">
                  <a href=""></a>
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
                <span className="icon">Settings</span>
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
                <td>Date</td>
                <td>Status</td>
                <td>Activity</td>
                <td>RecordedBy</td>
               
              </tr>
            </thead>
            <tbody>

{
    userData.map((data)=>(
         <tr>
                <td>{data.Names}</td>
                <td>{data.Email}</td>
                <td>{data.Date}</td>
                <td  className="{data.Status}"
              style={{
                backgroundColor:
                ((data.Status ==='communicated'&& 'yellow')||
                (data.Status ==='absent'&& 'red')||
                (data.Status ==='present'&& 'green'))
              }}>{data.Status}
               </td>
                <td>{data.Activity}</td>
                <td>{data.RecordedBy}</td>

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
export default Dashboards;
