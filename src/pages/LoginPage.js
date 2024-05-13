// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography } from 'antd';
import LoginForm from '../components/Login/LoginForm';
import Notification from '../components/Notification';
import { authService } from '../services/authService';

const { Title } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            await authService.login(credentials);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            Notification('error', error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-96">
                <Title level={2}>Login</Title>
                <LoginForm onLogin={handleLogin} />
                <Button type="link" onClick={() => navigate('/register')}>
                    Register here
                </Button>
            </Card>
        </div>
    );
};

export default LoginPage;
