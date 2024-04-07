// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from '../components/Todo/TodoList';
import CreateTodoModal from '../components/Todo/CreateTodoModal';
import { todoService } from '../services/todoService';
import MainLayout from '../components/Layout/MainLayout';
import { toCamelCase } from '../helper/Helper';
import Notification from "../components/Notification";

const HomePage = () => {
    const [todos, setTodos] = useState([]);
    const [username, setUsername] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await todoService.fetchTodos();
            setTodos(response.todos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
            setUsername(toCamelCase(response.username));
        } catch (error) {
            console.error('Fetch todos failed:', error);
        }
    };

    const handleCreateTodo = async (todo) => {
        try {
            const newTodo = await todoService.addTodo(todo);
            setTodos([newTodo, ...todos]);
            setIsModalVisible(false);
        } catch (error) {
            console.error('Create todo failed:', error);
            Notification('error', error.response, 'Failed to create todo');
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center">Hello {username}, welcome to the Todo List App!</h1>
                <TodoList todos={todos} setTodos={setTodos} />
                <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    size="large"
                    className="fixed bottom-24 right-8"
                    onClick={() => setIsModalVisible(true)}
                />
            </div>
            <CreateTodoModal
                visible={isModalVisible}
                onCreate={handleCreateTodo}
                onCancel={() => setIsModalVisible(false)}
            />
        </MainLayout>
    );
};

export default HomePage;
