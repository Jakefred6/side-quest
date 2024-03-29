import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Logo } from "../assets";
import { useContentContext } from "../providers/ContentContext";
import { Link } from "react-router-dom";
import {QUERY_USER} from "../utils/queries";
import { useQuery } from '@apollo/client';
// import { useNavigate, Link} from "react-router-dom";
// import { gql, useLazyQuery } from '@apollo/client';

// comented code isn't usable right now because of sign up, uncomment when ready and delete other code
const Login = () => {
  // const navigate = useNavigate();

  // const [triggerLogoin, { data }] = useLazyQuery(QUERY_USER, {
  //   onCompleted: (data) => {
  //     localStorage.setItem('token', data.login.token);
  //     Navigate("/dashboard");
  // }
  // });

  const onFinish = (values) => {
    //   // Trigger the login query with form values
    //   triggerLogin({
    //     variables: {
    //       email: values.username, // Assuming the 'username' field is actually the user's email
    //       password: values.password,
    //     },
    //   });
    // };
  
    // useEffect(() => {
    //   // Redirect if already logged in
    //   if (localStorage.getItem("token")) {
    //     navigate("/dashboard");
    //   }
    // }, [navigate])
    console.log("Received values of form: ", values);
    //Login
    localStorage.setItem('token', 'testtoken');
    // openSuccessNotification("Login Sucess!", "Successfully Logged In");
    window.location.replace("/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("/dashboard");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-[#ececec]">
      <div className="flex flex-col justify-center items-center">
        
        <div className="text-2xl font-semibold mt-2">Side Quest</div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 bg-white p-6 sm:px-8 px-4 max-sm:mx-2 rounded-2xl shadow-xl">
        <div className="text-lg font-medium">Log In</div>
        <Form
          name="normal_login"
          className="flex flex-col sm:w-[300px] w-[250px] mt-4"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter your Email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="float-right text-blue-400" href="/">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 mt-4"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Link to="/signup" className="text-blue-400"> Don't have an account? Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;
