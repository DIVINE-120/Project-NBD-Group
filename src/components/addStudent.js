import React, { useState } from 'react';
import Userservices from '../services/userservices';
import {
    Button,
    Card,
    Form,
    Input,
    Select,
    DatePicker,
    Space,
  } from 'antd';
  const { Option } = Select;
  const onChange = (date,dateString)=> {
    console.log(date,dateString)
  }

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  const App = () => {
      const formItemLayout = {
          labelCol: {
              span:6,
          },
          wrapperCol: {
              span: 14,
          },
      };
      const onFinish = async(values)=> {
          console.log("myRegister")
          console.log('Success:', values);
          const UserObj = {
              ...values,
          };
          console.log("Received values of form:",values);
          console.log("User:",UserObj);

          const res = await Userservices.createUser(UserObj);
          console.group("<<<<<<<<:",res)
      };
    const prefixSelector = (
      
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="250">+250</Option>
          
        </Select>
      </Form.Item>
    );
    return (
     <>
          
      <Card style={{width:"60%",left:"25rem",top:"30px",height:"90%"}}>
   
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
    
      <div style={{marginLeft:"2rem",marginTop:"30px"}}>
     <Form.Item label="Names">
         <Input style={{width:"90%"}}/>
     </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              type: 'names',
              message: 'The input is not valid Email!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input  style={{width:"90%"}} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "90%",
            }}
            />
        </Form.Item>

  
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
          style={{width:"90%"}}>
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>      
        <p style={{marginLeft:"7rem"}}>Date</p>
      <Space direction="vertical">
        <DatePicker onChange={onChange} style={{width:"90%",marginLeft:"10.5rem",bottom:"40px"}}/>
      </Space>
          <Button  htmlType="submit" style={{left:"2rem",top:"1rem"}}>
            Register
          </Button>
          
          </div>
         
          </Form> </Card>
          </>
          
    );
  };
  
  export default App;