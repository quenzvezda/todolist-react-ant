// src/components/Layout/Header.js
import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    };

    return (
        <div className="flex justify-between items-center bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Todolist App</h1>
            <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Header;
