import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import LoginForm from '../components/Login/LoginForm';
import Notification from '../components/Notification';
import { authService } from '../services/authService';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            const token = await authService.login(credentials);
            // Simpan token di local storage atau cookie
            // Redirect ke halaman home
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            Notification('error', error.response, 'Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-96">
                <LoginForm onLogin={handleLogin} />
            </Card>
        </div>
    );
};

export default LoginPage;
