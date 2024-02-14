import React from "react";
import { Card, Typography, Button, Form, Input, Select, notification } from "antd";
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
    const [form] = Form.useForm();
    const [createQuest, { loading, error }] = useMutation(CREATE_QUEST);

    const onFinish = async (values) => {
        try {
            const response = await createQuest({
                variables: {
                    title: values.title,
                    continent: parseInt(values.continent, 10),
                    xp: parseInt(values.xp, 10),
                    
                },
            });
            console.log('Quest created successfully', response.data);
            notification.success({
                message: 'Quest Created',
                description: 'Your quest has been successfully created.',
            });
            form.resetFields(); // Reset form fields after successful submission
        } catch (err) {
            console.error('Error creating quest:', err);
            notification.error({
                message: 'Creation Failed',
                description: 'There was an error creating your quest. Please try again.',
            });
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
                            form={form}
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
                                rules={[{ required: true, message: 'Please input the XP reward!' }, { type: 'int' }]}
                            >
                                <Input type="number" placeholder="XP" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block danger loading={loading}>
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