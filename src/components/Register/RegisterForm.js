// RegisterForm.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import { authService } from '../../services/authService';
import {useNavigate} from "react-router-dom";
import Notification from "../Notification";

const RegisterForm = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            await authService.registerUser(values);
            navigate('/login');  // Atau ke halaman yang diinginkan setelah registrasi
            Notification('success', 'Registration successful!', 'You are now registered.');
        } catch (error) {
            console.error('Registration Failed:', error);
            Notification('error', 'Registration failed', error.response?.data?.message || 'Please try again.');
        }
    };


    return (
        <Form
            name="register"
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
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
