import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
    // Normally, here you would call a createUser mutation or similar to register the user
    // After successful registration, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-[#ececec]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold mt-2">Side Quest</div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 bg-white p-6 sm:px-8 px-4 max-sm:mx-2 rounded-2xl shadow-xl">
        <div className="text-lg font-medium">Sign Up</div>
        <Form
          name="signup"
          className="signup-form"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your Email!' },
              { type: 'email', message: 'The input is not valid E-mail!' }
            ]}
          >
            <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
              { min: 6, message: 'Password must be at least 6 characters long!' } // Example additional rule
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 mt-4">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
