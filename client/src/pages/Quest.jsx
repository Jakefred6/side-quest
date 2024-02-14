import { Card, Form, Input, Button, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const continents = [
  { key: 1, label: "Asia" },
  { key: 2, label: "Australia" },
  { key: 3, label: "South America" },
  { key: 4, label: "Europe" },
  { key: 5, label: "Africa" },
  { key: 6, label: "North America" },
  { key: 7, label: "Antarctica" },
];

const Quest = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/dashboard"); // Redirect to dashboard page
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex justify-between p-4 mb-5 border items-center">
        <h1 className="text-xl text-red-500 font-bold">Create Quest</h1>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div
          className="p-4 overflow-y-auto"
          style={{ width: "70%" }}
        >
          <Card
            hoverable={true}
            loading={false}
            className="shadow-lg mb-4"
          >
            <Form
              name="quest-normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item name="title">
                <Input placeholder="Title" />
              </Form.Item>
              <Form.Item name="continent">
                <Select placeholder="Select Continent">
                  {continents.map((continent) => (
                    <Option key={continent.key} value={continent.label}>
                      {continent.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="xp">
                <Input type="text" placeholder="XP" />
              </Form.Item>
              <Form.Item>
                <Button danger type="primary" htmlType="submit" block>
                  Create Quest
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quest;
