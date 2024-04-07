import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = ({ onLogin }) => {
    const onFinish = (values) => {
        onLogin(values);
    };

    return (
        <Form
            name="login"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className="w-full max-w-xs"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
