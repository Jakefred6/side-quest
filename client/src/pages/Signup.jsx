import React from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';



const Signup = () => {
  // const {createUser, loading, error} = useMutation(CREATE_USER);
  // Example handleSubmit function that does nothing (for now)
  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="signup" onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
