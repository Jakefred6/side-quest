import { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
// import { useContentContext } from "../providers/ContentContext";

const Signup = () => {
  // const { openSuccessNotification, openErrorNotification } = useContentContext();
  // const [signUpUser, { loading }] = useMutation(CREATE_USER);

  // const onFinish = async (values) => {
  //   try {
  //     const { data } = await signUpUser({ 
  //       variables: {
  //         username: values.username,
  //         email: values.email,
  //         password: values.password,
  //       },
  //     });

  //     // Handle response data
  //     console.log("User created:", data.createUser);
  //     window.location.replace("/dashboard"); // Redirect upon successful signup
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error gracefully, e.g., display error message to user
  //   }
  // };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-[#ececec]">
      <div className="text-2xl font-semibold mt-2">Signup</div>
      <div className="flex flex-col justify-center items-center mt-4 bg-white p-6 sm:px-8 px-4 max-sm:mx-2 rounded-2xl shadow-xl">
        <Form
          name="signup_form"
          className="flex flex-col sm:w-[300px] w-[250px] mt-4"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address.",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your username.",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password.",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: "Please confirm your password.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match.'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 mt-4"
              loading={loading}
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
