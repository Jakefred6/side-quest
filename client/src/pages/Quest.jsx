import React from "react";
import { Card, Typography, Button, Form, Input, Select } from "antd";
import { useMutation } from '@apollo/client';
import { CREATE_QUEST } from '../utils/mutations';

const { Text } = Typography;
const { Option } = Select;

// Example continents list for select field
const continents = [
    { id: 1, name: "Asia" },
    { id: 2, name: "Australia" },
    { id: 3, name: "South America" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Africa" },
    { id: 6, name: "North America" },
    { id: 7, name: "Antarctica" },
];

const Quest = () => {
    const [createQuest, { data, loading, error }] = useMutation(CREATE_QUEST);

    const onFinish = async (values) => {
        try {
            const response = await createQuest({
                variables: {
                    title: values.title,
                    xp: parseInt(values.xp, 10),
                    continent: parseInt(values.continent, 10),
                },
            });
            console.log('Quest created successfully', response.data);
        } catch (err) {
            console.error('Error creating quest:', err);
            console.log(err.networkError ? err.networkError.result : err);
        }
    };
    

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex justify-between p-4 mb-5 border items-center">
                <h1 className="text-xl text-red-500 font-bold">Create Quest</h1>
            </div>
            <div className="flex flex-row w-full justify-center">
                <div className="p-4 overflow-y-auto" style={{ width: "70%" }}>
                    <Card hoverable={true} loading={loading} className="shadow-lg mb-4">
                        <Form
                            name="quest-form"
                            className="quest-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input the quest title!' }]}
                            >
                                <Input placeholder="Title" />
                            </Form.Item>
                            <Form.Item
                                name="continent"
                                rules={[{ required: true, message: 'Please select a continent!' }]}
                            >
                                <Select placeholder="Select a continent">
                                    {continents.map(continent => (
                                        <Option key={continent.id} value={continent.id}>{continent.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="xp"
                                rules={[{ required: true, message: 'Please input the XP reward!' }]}
                            >
                                <Input type="number" placeholder="XP" />
                            </Form.Item>
                            {/* Add more fields as needed */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block danger>
                                    Create Quest
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
