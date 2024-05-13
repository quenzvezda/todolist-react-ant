// RegisterPage.js
import React from 'react';
import { Card, Button, Typography } from 'antd';
import RegisterForm from '../components/Register/RegisterForm';
import {useNavigate} from "react-router-dom";

const { Title } = Typography;

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-96">
                <Title level={2}>Register</Title>
                <RegisterForm />
                <Button type="link" onClick={() => navigate('/login')}>
                    Already have an account? Login here
                </Button>
            </Card>
        </div>
    );
};

export default RegisterPage;
