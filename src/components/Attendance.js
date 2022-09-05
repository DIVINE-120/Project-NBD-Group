import React,{useState} from "react";
import "./Attendance.css";
import userData from "../assets/json/Attendance.json";
import {Form,Select,Modal, notification,Space} from "antd";
import AddStudents from "../components/addStudent"

const Attendance = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [userSelected, setuserSelected] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <h1> Take Attendance </h1>

      <div className="date1">
        <div className="menu-bar">
          <ul>
         
          <li><a href="/AddStudents">ADD STUDENTS</a> </li>
       
        </ul>
        </div>
        <h5 className="selectdateAttendance">Date:</h5>
        <input type="date" id="date" name="date" className="dateattendance" />
        
         
        <Form.Item label="Subject" className="dropDown">
          <Select>
            <Select.Option value="F">Figma</Select.Option>
            <Select.Option value="T">Typing Master</Select.Option>
            <Select.Option value="H">Html</Select.Option>
            <Select.Option value="U">Css</Select.Option>
            <Select.Option value="F">Frontend</Select.Option>
            <Select.Option value="B">Backend</Select.Option>
          </Select>
        </Form.Item>
          
       
        
      </div>
      <div className="deta">
        <table>
          <thead>
            <tr>
              <td> No</td>
              <td>Names</td>
              <td>Email</td>
              <td>Status</td>
              <td>
                <label for="vehicle2">Attendance</label>
              </td>
             
            </tr>
          </thead>
          <tbody>
            {userData.map((index) => (
              <tr>
                <td>{index.No}</td>
                <td>{index.Names}</td>
                <td>{index.Email}</td>
                <td> {index.Status}</td>
                <td>
                  {index.Attendance}
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                </td>
               
               
                
              </tr>
            ))}
          </tbody>
          
        </table>
        <input class="save" type="button" name="" value="Save"/>
      </div>
    
    </>
  );
};
export default Attendance;
